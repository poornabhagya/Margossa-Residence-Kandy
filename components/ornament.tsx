import { cn } from '@/lib/utils'

export function Ornament({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-center gap-3 text-gold', className)}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-current opacity-50" />
      <svg
        width="26"
        height="14"
        viewBox="0 0 26 14"
        fill="none"
        className="opacity-90"
      >
        <path
          d="M13 1c2.5 2.8 4 4.2 7 4.8-3 .6-4.5 2-7 5.2-2.5-3.2-4-4.6-7-5.2 3-.6 4.5-2 7-4.8Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="13" cy="6" r="1" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-current opacity-50" />
    </div>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
      {children}
    </span>
  )
}
