import React from 'react'

export default function Card({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendLabel,
  children,
  className = '',
}) {
  const isPositive = trend >= 0

  return (
    <div
      className={`
        rounded-2xl border border-white/5 p-5
        bg-[var(--color-dark-deep)]
        shadow-lg transition-all duration-200
        hover:translate-y-[-2px]
        hover:border-white/10
        ${className}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-[var(--color-secondary)]">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-white mt-1">
            {value}
          </h3>
        </div>

        {Icon && (
          <div
            className="
              w-12 h-12 rounded-xl
              flex items-center justify-center
              bg-white/5 text-[var(--color-primary)]
            "
          >
            <Icon size={22} />
          </div>
        )}
      </div>

      {(trend !== undefined || description) && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-[var(--color-secondary)]">
            {description}
          </div>

          {trend !== undefined && (
            <div
              className={`
                text-sm font-medium px-2 py-1 rounded-md
                ${
                  isPositive
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-red-500/10 text-red-400'
                }
              `}
            >
              {isPositive ? '+' : ''}
              {trend}%
              {trendLabel && (
                <span className="ml-1 opacity-80">
                  {trendLabel}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  )
}