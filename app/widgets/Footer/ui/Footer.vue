<!-- eslint-disable vue/multi-word-component-names -->
<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-[var(--qtimuikit-lightpurple)] relative pt-20 pb-8 overflow-hidden mt-auto">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12">
      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
        <!-- Left Column -->
        <div class="space-y-6">
          <p class="text-sm text-[var(--qtimuikit-bnw-0)] font-medium font-sans">
            Is there a project?
          </p>

          <h2 class="text-5xl lg:text-7xl font-bold text-[var(--qtimuikit-bnw-0)] leading-[1.1] tracking-tight font-sans">
            <span class="border-b-2 border-[var(--qtimuikit-bnw-0)] pb-1">Let's work</span><br>
            <span class="border-b-2 border-[var(--qtimuikit-bnw-0)] pb-1">together</span>
          </h2>
        </div>

        <!-- Right Column - Contacts -->
        <div class="space-y-10 lg:pt-4">
          <!-- Contacts -->
          <div class="space-y-2">
            <p class="text-sm text-[var(--qtimuikit-bnw-0)] font-medium mb-3 font-sans">
              For all questions
            </p>
            <a
              href="tel:+79202780068"
              class="block text-lg text-[var(--qtimuikit-bnw-0)] hover:opacity-70 transition-opacity font-sans"
            >
              +7 (920) 278-00-68
            </a>
            <a
              href="mailto:qtim@agency.com"
              class="block text-lg text-[var(--qtimuikit-bnw-0)] hover:opacity-70 transition-opacity font-sans"
            >
              qtim@agency.com
            </a>
          </div>

          <!-- Russia Office -->
          <div class="space-y-2">
            <p class="text-sm text-[var(--qtimuikit-bnw-0)] font-medium font-sans">
              Office in Russia
            </p>
            <p class="text-base text-[var(--qtimuikit-bnw-0)] leading-relaxed font-sans">
              139 Ruben Station Lake<br>
              Drew, NM 52678
            </p>
            <button class="w-10 h-10 bg-[var(--qtimuikit-bnw-0)] rounded-full flex items-center justify-center hover:scale-110 transition-transform mt-2">
              <UIcon
                name="lucide:send"
                class="w-4 h-4 text-[var(--qtimuikit-bnw-4)]"
              />
            </button>
          </div>

          <!-- Dubai Office -->
          <div class="space-y-2">
            <p class="text-sm text-[var(--qtimuikit-bnw-0)] font-medium font-sans">
              Office in Dubai
            </p>
            <p class="text-base text-[var(--qtimuikit-bnw-0)] leading-relaxed font-sans">
              139 Ruben Station Lake<br>
              Drew, NM 52678
            </p>
            <button class="w-10 h-10 bg-[var(--qtimuikit-bnw-0)] rounded-full flex items-center justify-center hover:scale-110 transition-transform mt-2">
              <UIcon
                name="lucide:send"
                class="w-4 h-4 text-[var(--qtimuikit-bnw-4)]"
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
            class="text-sm text-[var(--qtimuikit-bnw-0)] border-b border-[var(--qtimuikit-bnw-0)] pb-0.5 hover:opacity-70 transition-opacity font-sans"
          >
            Facebook
          </a>
          <a
            href="#"
            class="text-sm text-[var(--qtimuikit-bnw-0)] border-b border-[var(--qtimuikit-bnw-0)] pb-0.5 hover:opacity-70 transition-opacity font-sans"
          >
            Instagram
          </a>
          <a
            href="#"
            class="text-sm text-[var(--qtimuikit-bnw-0)] border-b border-[var(--qtimuikit-bnw-0)] pb-0.5 hover:opacity-70 transition-opacity font-sans"
          >
            Telegram
          </a>
        </div>

        <!-- Go Button (Center) -->
        <button class="w-32 h-16 bg-[var(--qtimuikit-bnw-0)] rounded-t-full flex items-start justify-center pt-4 hover:pt-5 transition-all">
          <span class="text-[var(--qtimuikit-bnw-4)] text-lg font-medium font-sans">Go</span>
        </button>

        <!-- Links Right -->
        <div class="flex items-center gap-6">
          <a
            href="#"
            class="text-sm text-[var(--qtimuikit-bnw-0)] border-b border-[var(--qtimuikit-bnw-0)] pb-0.5 hover:opacity-70 transition-opacity font-sans"
          >
            Behance
          </a>
          <a
            href="#"
            class="text-sm text-[var(--qtimuikit-bnw-0)] border-b border-[var(--qtimuikit-bnw-0)] pb-0.5 hover:opacity-70 transition-opacity font-sans"
          >
            LinkedIn
          </a>
          <a
            href="#"
            class="text-sm text-[var(--qtimuikit-bnw-0)] border-b border-[var(--qtimuikit-bnw-0)] pb-0.5 hover:opacity-70 transition-opacity font-sans"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
