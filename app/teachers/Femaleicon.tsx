export function FemaleTeacherIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C8.8 3 6.5 5.6 6.5 8.7c0 1.6.7 3.1 1.8 4.2C6.2 14 5 16.3 5 19v1h14v-1c0-2.7-1.2-5-3.3-6.1A5.7 5.7 0 0017.5 8.7C17.5 5.6 15.2 3 12 3z"
        fill="currentColor"
      />
      <circle cx="12" cy="8.5" r="2.2" fill="white" />
    </svg>
  );
}