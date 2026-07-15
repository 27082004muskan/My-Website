import React from "react";

const PageLayout = ({
  id,
  badge,
  badgeIcon: BadgeIcon,
  label,
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative min-h-screen overflow-hidden bg-[#0b0d12] pt-20 text-white ${className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {(badge || label || title || description) && (
          <div className="mb-16 max-w-3xl">
            {badge && (
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
                {BadgeIcon && <BadgeIcon className="h-4 w-4 text-orange-400" />}
                <span>{badge}</span>
              </div>
            )}

            {label && (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-orange-300/80">
                {label}
              </p>
            )}

            {title && (
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            )}

            {description && (
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default PageLayout;
