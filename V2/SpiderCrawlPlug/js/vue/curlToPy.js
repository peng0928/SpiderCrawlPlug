function curlToPy(curl) {
    var promo = "# -*- coding: UTF-8 -*-";

    // List of curl flags that are boolean typed; this helps with parsing
    // a command like `curl -abc value` to know whether 'value' belongs to '-c'
    // or is just a positional argument instead.
    var boolOptions = ['#', 'progress-bar', '-', 'next', '0', 'http1.0', 'http1.1', 'http2',
        'no-npn', 'no-alpn', '1', 'tlsv1', '2', 'sslv2', '3', 'sslv3', '4', 'ipv4', '6', 'ipv6',
        'a', 'append', 'anyauth', 'B', 'use-ascii', 'basic', 'compressed', 'create-dirs',
        'crlf', 'digest', 'disable-eprt', 'disable-epsv', 'environment', 'cert-status',
        'false-start', 'f', 'fail', 'ftp-create-dirs', 'ftp-pasv', 'ftp-skip-pasv-ip',
        'ftp-pret', 'ftp-ssl-ccc', 'ftp-ssl-control', 'g', 'globoff', 'G', 'get',
        'ignore-content-length', 'i', 'include', 'I', 'head', 'j', 'junk-session-cookies',
        'J', 'remote-header-name', 'k', 'insecure', 'l', 'list-only', 'L', 'location',
        'location-trusted', 'metalink', 'n', 'netrc', 'N', 'no-buffer', 'netrc-file',
        'netrc-optional', 'negotiate', 'no-keepalive', 'no-sessionid', 'ntlm', 'O',
        'remote-name', 'oauth2-bearer', 'p', 'proxy-tunnel', 'path-as-is', 'post301', 'post302',
        'post303', 'proxy-anyauth', 'proxy-basic', 'proxy-digest', 'proxy-negotiate',
        'proxy-ntlm', 'q', 'raw', 'remote-name-all', 's', 'silent', 'sasl-ir', 'S', 'show-error',
        'ssl', 'ssl-reqd', 'ssl-allow-beast', 'ssl-no-revoke', 'socks5-gssapi-nec', 'tcp-nodelay',
        'tlsv1.0', 'tlsv1.1', 'tlsv1.2', 'tr-encoding', 'trace-time', 'v', 'verbose', 'xattr',
        'h', 'help', 'M', 'manual', 'V', 'version'
    ];

    if (!curl.trim())
        return "empty input";
    var cmd = parseCommand(curl, {
        boolFlags: boolOptions
    });

    if (cmd._[0] != "curl")
        throw "Not a curl command";

    var req = extractRelevantPieces(cmd);

    if (Object.keys(req.headers).length == 0 && !req.data.ascii && !req.data.files && !req.basicauth) {
        return promo + "\n" + renderSimple(req.method, req.url);
    }
    return promo + "\n\n" + renderComplex(req);

    // renderSimple renders a simple HTTP request using requests convenience methods
    function renderSimple(method, url) {
        if (method == "GET")
            return 'requests.get(' + url + ')\n';
        else if (method == "POST")
            return 'requests.post(' + url + ', data=None)\n';
        else if (method == "HEAD")
            return 'requests.head(' + url + ')\n';
        else
            return 'not supported yet';
    }

    // renderComplex renders py code that requires making a http.Request.
    function renderComplex(req) {
        var py = "import requests\n";
        data = "data = data\n";
        headers = getHeadersStr(req);
        data = getDataStr(req.data);
        py += "\n" + headers + "\n" + data + "\n";

        py += "response = requests." + req.method.toLowerCase() + '(\'' + req.url + '\'';
        if (headers != "") {
            py += ', headers=headers';
        }
        if (data != "") {
            py += ', data=data';
        }
        if (req.basicAuth != undefined) {
            py += ', auth=(\'' + req.basicAuth.user + '\',\'' + req.basicAuth.pass + ")";
        }
        py += ")";
        py += "\nprint(response.text)";
        py += "\nprint(response)";
        return py;
    }

    function getDataStr(data) {

        dataStr = '';
        dataFiles = data.files;
        if (dataFiles != undefined) {
            return dataStr + 'data = open(\'' + dataFiles + '\')\n';
        }

        dataStr += 'data = [';
        try {
            dataAsciis = data.ascii.split("&");
        } catch (e) {
            console.log(e)
            dataAsciis = []
        }
        if (dataAsciis.length == 1) {
            return 'data = \'' + dataAsciis[0] + '\'';
        }
        for (i = 0; i < dataAsciis.length; i++) {
            equalSignIdx = dataAsciis[i].indexOf('=');
            key = dataAsciis[i].substring(0, equalSignIdx);
            value = dataAsciis[i].substring(equalSignIdx + 1).trim();
            dataStr += '  (\'' + key + '\', \'' + value + '\'),\n';
        }
        dataStr += "]\n";
        return dataStr;
    }

    function getHeadersStr(req) {
        if (Object.keys(req.headers) == 0)
            return "";
        headers = "headers = {\n";
        for (var name in req.headers) {
            headers += '    \'' + name + '\': \'' + req.headers[name] + '\',\n';
        }
        headers += "}\n";
        return headers;
    }

    // getHeadersDict generate a dict which contains header name and header value
    function getHeadersDict(cmd) {
        var result = {};
        var colonIndex;
        var header;
        var headerName;
        var headerValue;

        if (cmd.H) {
            for (var i = 0; i < cmd.H.length; i++) {
                header = cmd.H[i];
                colonIndex = header.indexOf(':');
                console.log(colonIndex)
                if (colonIndex !== -1) {
                    headerName = header.substring(0, colonIndex);
                    headerValue = header.substring(colonIndex + 1).trim();
                    result[headerName] = headerValue;
                }else{
                    headerValue = header.substring(colonIndex + 1).trim();
                    result[headerValue] = "";
                }

            }
        }
        if (cmd.header) {
            for (i = 0; i < cmd.H.length; i++) {
                header = cmd.header[i];
                colonIndex = header.indexOf(':');
                headerName = header.substring(0, colonIndex);
                headerValue = header.substring(colonIndex + 1).trim();
                result[headerName] = headerValue;
            }
        }
        return result;
    }

    function getBasicAuth(cmd) {
        // between -u and --user, choose the long form...
        var basicAuthString = "";
        if (cmd.user && cmd.user.length > 0)
            basicAuthString = cmd.user[cmd.user.length - 1];
        else if (cmd.u && cmd.u.length > 0)
            basicAuthString = cmd.u[cmd.u.length - 1];
        var basicAuthSplit = basicAuthString.indexOf(":");
        if (basicAuthSplit > -1) {
            return basicauth = {
                user: basicAuthString.substr(0, basicAuthSplit),
                pass: basicAuthString.substr(basicAuthSplit + 1)
            };
        } else if (basicAuthString != "") {
            return basicAuth = {
                user: basicAuthString,
                pass: "<PASSWORD>"
            };
        } else {
            return undefined;
        }
    }

    function getDataDict(cmd, relevant) {
        data = {};
        // join multiple request body data, if any
        var dataAscii = [];
        var dataFiles = [];
        var loadData = function (d) {
            if (!relevant.method)
                relevant.method = "POST";

            // curl adds a default Content-Typ header if not set explicitly
            if (relevant.headers["Content-Type"] != "") {
                hasContentType = true;
            } else {
                relevant.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }

            for (var i = 0; i < d.length; i++) {
                if (d[i].length > 0 && d[i][0] == "@")
                    dataFiles.push(d[i].substr(1));
                else
                    dataAscii.push(d[i]);
            }
        };
        if (cmd.d)
            loadData(cmd.d);
        if (cmd['data-raw'])
            loadData(cmd['data-raw']);
        if (cmd.data)
            loadData(cmd.data);
        if (dataAscii.length > 0)
            data.ascii = dataAscii.join("&");
        if (dataFiles.length > 0)
            data.files = dataFiles.join("&");
        return data;
    }

    // extractRelevantPieces returns an object with relevant pieces
    // extracted from cmd, the parsed command. This accounts for
    // multiple flags that do the same thing and return structured
    // data that makes it easy to spit out py code.
    function extractRelevantPieces(cmd) {
        var relevant = {
            url: "",
            method: "",
            headers: {},
            data: {}
        };

        // prefer --url over unnamed parameter, if it exists; keep first one only
        if (cmd.url && cmd.url.length > 0)
            relevant.url = cmd.url[0];
        else if (cmd._.length > 1)
            relevant.url = cmd._[1]; // position 1 because index 0 is the curl command itself

        // gather the headers together
        relevant.headers = getHeadersDict(cmd);

        // set method to HEAD?
        if (cmd.I || cmd.head)
            relevant.method = "HEAD";

        // between -X and --request, prefer the long form I guess
        if (cmd.request && cmd.request.length > 0)
            relevant.method = cmd.request[cmd.request.length - 1].toUpperCase();
        else if (cmd.X && cmd.X.length > 0)
            relevant.method = cmd.X[cmd.X.length - 1].toUpperCase(); // if multiple, use last (according to curl docs)

        relevant.data = getDataDict(cmd, relevant);
        relevant.basicAuth = getBasicAuth(cmd);

        // default to GET if nothing else specified
        if (!relevant.method)
            relevant.method = "GET";

        return relevant;
    }

    function toTitleCase(str) {
        return str.replace(/\w*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

function parseCommand(input, options) {
    if (typeof options === 'undefined') {
        options = {};
    }

    var result = {
            _: []
        }, // what we return
        cursor = 0, // iterator position
        token = ""; // current token (word or quoted string) being built

    // trim leading $ or # that may have been left in
    input = input.trim();
    if (input.length > 2 && (input[0] == '$' || input[0] == '#') && whitespace(input[1]))
        input = input.substr(1).trim();

    for (cursor = 0; cursor < input.length; cursor++) {
        skipWhitespace();
        if (input[cursor] == "-") {
            flagSet();
        } else {
            unflagged();
        }
    }

    return result;

    // isLongFalg return true is input length is larger than cursor and
    // come with a dash
    function isLongFalg() {
        return cursor < input.length - 1 && input[cursor + 1] == "-";
    }

    // flagSet handles flags and it assumes the current cursor
    // points to a first dash.
    function flagSet() {
        // long flag form?
        if (isLongFalg()) {
            return longFlag();
        }

        // if not, parse short flag form
        return shortFlag();
    }

    // longFlag consumes a "--long-flag" sequence and
    // stores it in result.
    function longFlag() {
        cursor += 2; // skip leading dashes
        var flagName = nextString("=");
        if (boolFlag(flagName))
            result[flagName] = true;
        else {
            if (typeof result[flagName] == 'undefined') {
                result[flagName] = [];
            }
            if (Array.isArray(result[flagName])) {
                result[flagName].push(nextString());
            }
        }
    }

    function shortFlag() {
        cursor++; // skip leading dash
        while (cursor < input.length && !whitespace(input[cursor])) {
            var flagName = input[cursor];
            if (typeof result[flagName] == 'undefined') {
                result[flagName] = [];
            }
            cursor++; // skip the flag name
            if (boolFlag(flagName))
                result[flagName] = true;
            else if (Array.isArray(result[flagName]))
                result[flagName].push(nextString());
        }
    }

    // unflagged consumes the next string as an unflagged value,
    // storing it in the result.
    function unflagged() {
        result._.push(nextString());
    }

    // boolFlag returns whether a flag is known to be boolean type
    function boolFlag(flag) {
        if (Array.isArray(options.boolFlags)) {
            for (var i = 0; i < options.boolFlags.length; i++) {
                if (options.boolFlags[i] == flag)
                    return true;
            }
        }
        return false;
    }

    // nextString skips any leading whitespace and consumes the next
    // space-delimited string value and returns it. If endChar is set,
    // it will be used to determine the end of the string. Normally just
    // unescaped whitespace is the end of the string, but endChar can
    // be used to specify another end-of-string. This function honors \
    // as an escape character and does not include it in the value, except
    // in the special case of the \$ sequence, the backslash is retained
    // so other code can decide whether to treat as an env var or not.
    function nextString(endChar) {
        skipWhitespace();

        var str = "";

        var quoted = false,
            quoteCh = "",
            escaped = false;

        for (; cursor < input.length; cursor++) {
            if (quoted) {
                if (input[cursor] == quoteCh && !escaped) {
                    quoted = false;
                    continue;
                }
            }
            if (!quoted) {
                if (!escaped) {
                    if (whitespace(input[cursor])) {
                        return str;
                    }
                    if (input[cursor] == '"' || input[cursor] == "'") {
                        quoted = true;
                        quoteCh = input[cursor];
                        cursor++;
                    }
                    if (endChar && input[cursor] == endChar) {
                        cursor++; // skip the endChar
                        return str;
                    }
                }
            }
            if (!escaped && input[cursor] == "\\") {
                escaped = true;
                // skip the backslash unless the next character is $
                if (!(cursor < input.length - 1 && input[cursor + 1] == '$'))
                    continue;
            }

            str += input[cursor];
            escaped = false;
        }

        return str;
    }

    // skipWhitespace skips whitespace between tokens, taking into account escaped whitespace.
    function skipWhitespace() {
        for (; cursor < input.length; cursor++) {
            while (input[cursor] == "\\" && (cursor < input.length - 1 && whitespace(input[cursor + 1])))
                cursor++;
            if (!whitespace(input[cursor]))
                break;
        }
    }

    // whitespace returns true if ch is a whitespace character.
    function whitespace(ch) {
        return ch == " " || ch == "\t" || ch == "\n" || ch == "\r";
    }
}
