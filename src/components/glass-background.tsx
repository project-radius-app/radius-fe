
export function GlassBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background transition-colors duration-500">
      {/* Ambient moving gradient orbs */}
      <div className="absolute top-[20%] left-[10%] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[80px] animate-pulse duration-[8000ms] dark:bg-purple-600/10" />
      <div className="absolute top-[10%] right-[15%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse duration-[10000ms] delay-1000 dark:bg-blue-600/10" />
      <div className="absolute bottom-[20%] left-[25%] h-[300px] w-[300px] rounded-full bg-pink-500/15 blur-[90px] animate-pulse duration-[9000ms] delay-500 dark:bg-pink-600/10" />
      <div className="absolute bottom-[10%] right-[5%] h-[380px] w-[380px] rounded-full bg-teal-500/15 blur-[100px] animate-pulse duration-[11000ms] delay-2000 dark:bg-teal-600/10" />

      {/* Grid overlay for a high-tech/clean look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
    </div>
  )
}
