
function Footer() {
  return (
    <footer class="bg-[#00C9A7] text-white pt-12 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* <!-- Brand --> */}
          <div class="space-y-4">
            <div class="flex items-center">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-xl font-bold">TodoMaster</span>
            </div>
            <p class="text-white/80">Organize your tasks and boost productivity effortlessly.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-white/80 hover:text-white transition" aria-label="Facebook">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H8v-2.89h2.438V9.797c0-2.005 1.195-3.118 3.03-3.118.877 0 1.796.155 1.796.155v2.036h-1.013c-1 0-1.311.623-1.311 1.262v1.515h2.23l-.356 2.89h-1.874V21.9C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="/" class="text-white/80 hover:text-white transition">Home</a></li>
              <li><a href="#tasks" class="text-white/80 hover:text-white transition">Tasks</a></li>
              <li><a href="#categories" class="text-white/80 hover:text-white transition">Categories</a></li>
              <li><a href="#calendar" class="text-white/80 hover:text-white transition">Calendar View</a></li>
              <li><a href="#login" class="text-white/80 hover:text-white transition">Login</a></li>
            </ul>
          </div>

          {/* <!-- Features --> */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Features</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-white/80 hover:text-white transition">Task Prioritization</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition">Reminders & Notifications</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition">Progress Tracker</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition">Dark Mode</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition">Sync Across Devices</a></li>
            </ul>
          </div>

          {/* <!-- Contact --> */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Contact</h3>
            <address class="not-italic text-white/80 space-y-2">
              <p>Email: <a href="mailto:support@todomaster.app" class="hover:text-white">support@todomaster.app</a></p>
              <p>Phone: <a href="tel:+621234567890" class="hover:text-white">+62 123-4567-890</a></p>
              <p>Instagram: <a href="https://instagram.com/todomaster" class="hover:text-white">@todomaster</a></p>
            </address>
          </div>
        </div>

        <div class="text-center text-white/70 text-sm border-t border-white/30 pt-4">
          &copy; 2025 TodoMaster. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
