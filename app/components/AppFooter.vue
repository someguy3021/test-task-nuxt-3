<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-[#E5D5F5] relative pt-20 pb-8 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
        <!-- Left Column -->
        <div class="space-y-6">
          <p class="text-sm text-black font-medium">
            Is there a project?
          </p>

          <h2 class="text-5xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight">
            <span class="border-b-2 border-black pb-1">Let's work</span><br>
            <span class="border-b-2 border-black pb-1">together</span>
          </h2>
        </div>

        <!-- Right Column - Contacts -->
        <div class="space-y-10 lg:pt-4">
          <!-- Contacts -->
          <div class="space-y-2">
            <p class="text-sm text-black font-medium mb-3">
              For all questions
            </p>
            <a
              href="tel:+79202780068"
              class="block text-lg text-black hover:opacity-70 transition-opacity"
            >
              +7 (920) 278-00-68
            </a>
            <a
              href="mailto:qtim@agency.com"
              class="block text-lg text-black hover:opacity-70 transition-opacity"
            >
              qtim@agency.com
            </a>
          </div>

          <!-- Russia Office -->
          <div class="space-y-2">
            <p class="text-sm text-black font-medium">
              Office in Russia
            </p>
            <p class="text-base text-black leading-relaxed">
              139 Ruben Station Lake<br>
              Drew, NM 52678
            </p>
            <button class="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform mt-2">
              <UIcon
                name="lucide:send"
                class="w-4 h-4 text-white"
              />
            </button>
          </div>

          <!-- Dubai Office -->
          <div class="space-y-2">
            <p class="text-sm text-black font-medium">
              Office in Dubai
            </p>
            <p class="text-base text-black leading-relaxed">
              139 Ruben Station Lake<br>
              Drew, NM 52678
            </p>
            <button class="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform mt-2">
              <UIcon
                name="lucide:send"
                class="w-4 h-4 text-white"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <!-- Social Links Left -->
        <div class="flex items-center gap-6">
          <a
            href="#"
            class="text-sm text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            Facebook
          </a>
          <a
            href="#"
            class="text-sm text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>
          <a
            href="#"
            class="text-sm text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            Telegram
          </a>
        </div>

        <!-- Go Button (Center) -->
        <div class="relative">
          <button class="w-32 h-16 bg-black rounded-t-full flex items-start justify-center pt-4 hover:pt-5 transition-all group">
            <span class="text-white text-lg font-medium">Go</span>
          </button>
        </div>

        <!-- Links Right -->
        <div class="flex items-center gap-6">
          <a
            href="#"
            class="text-sm text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            Behance
          </a>
          <a
            href="#"
            class="text-sm text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="#"
            class="text-sm text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
