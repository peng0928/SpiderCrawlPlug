<script setup lang="ts">
import {ref, watch, onMounted} from 'vue'

const hookInput = ref("")
const hookType = ref("document start")
const hookJson = ref(false)
const spiderSwitch = ref(false)
const hookUrl = ref(false)
const hookXhr = ref(false)
const hookCookie = ref(false)
const hookDebug = ref(false)

const setAll = () => {
  chrome.storage.sync.set({hookInput: hookInput.value})
  chrome.storage.sync.set({spiderSwitch: spiderSwitch.value})
  chrome.storage.sync.set({hookJson: hookJson.value})
  chrome.storage.sync.set({hookType: hookType.value})
  chrome.storage.sync.set({hookDebug: hookDebug.value})
  chrome.storage.sync.set({hookCookie: hookCookie.value})
  chrome.storage.sync.set({hookXhr: hookXhr.value})
  chrome.storage.sync.set({hookUrl: hookUrl.value})
}

const openBackground = () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('options.html')
  })
}

onMounted(() => {
  chrome.storage.sync.get(['spiderSwitch', 'hookJson', 'hookInput', 'hookUrl', 'hookXhr', 'hookCookie', 'hookType', 'hookDebug'], (result) => {
    const input = result.hookInput;
    const crawl = result.spiderSwitch;
    const json = result.hookJson;
    const debug = result.hookDebug;
    const cookie = result.hookCookie;
    const url = result.hookUrl;
    const xhr = result.hookXhr;
    const hType = result.hookType;
    hookInput.value = input
    hookJson.value = json
    hookUrl.value = url
    hookXhr.value = xhr
    hookType.value = hType
    hookCookie.value = cookie
    hookDebug.value = debug
    spiderSwitch.value = crawl
  })
})


</script>

<template>
  <main>
    <div class="body bg-gray-50 h-auto p-6">
      <div class="p-3 flex justify-between">
        <div class="flex text-center items-center gap-1">
          <div class=" block font-semibold">监听</div>
          <a-switch type="round" v-model:model-value="spiderSwitch" @click="setAll"/>
        </div>
        <div>
          <button type="button" class="btn btn-primary" @click="openBackground">抓包中心</button>
        </div>
      </div>

      <div class="w-full max-w-md">
        <a-collapse :default-active-key="['1', 2]">
          <a-collapse-item header="HOOK 配置面板" key="1">

            <div class="grid gap-3">
              <!-- 搜索输入框 -->
              <div class="">
                <a-input v-model:model-value="hookInput" placeholder="输入 Hook 关键字..." allow-clear
                         @input="setAll" @clear="setAll"/>
              </div>
              <!-- 带图标的精致选择框 -->
              <div class="">
                <label class="block text-md font-medium  mb-1">注入方式</label>
                <a-select placeholder="Please select ..." v-model:model-value="hookType" @change="setAll">
                  <a-option value="document start">开始渲染注入</a-option>
                  <a-option value="document end">渲染完成注入</a-option>
                </a-select>
              </div>

              <!-- 选项列表 -->
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="flex gap-2">
                  <a-switch type="line" @click="setAll" v-model:model-value="hookJson"/>
                  <label for="hookJson" class=" ml-3 block ">
                    JSON函数
                  </label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookUrl" @click="setAll"/>
                  <label for="hookUrl" class=" ml-3 block ">
                    url编码、解码
                  </label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookXhr" @click="setAll"/>
                  <label for="hookXhr" class=" ml-3 block ">
                    Xhr/Fetch拦截

                  </label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookCookie" @click="setAll"/>
                  <label for="hookXhr" class=" ml-3 block ">
                    Cookie拦截


                  </label>
                </div>
                <div class="flex gap-2">
                  <a-switch type="line" v-model:model-value="hookDebug" @click="setAll"/>
                  <label for="hookXhr" class=" ml-3 block ">
                    绕过瑞数Debugger
                  </label>
                </div>
              </div>
            </div>

          </a-collapse-item>
        </a-collapse>
      </div>
    </div>
  </main>
</template>

<style>
@import "tailwindcss";

@plugin "daisyui";


.body {
  font-family: "Microsoft Yahei";
  width: 400px;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 防止滚动条出现 */
}

</style>
