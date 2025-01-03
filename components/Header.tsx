import * as Avatar from '@radix-ui/react-avatar';

const Header = () => {
  return (
    <header className="flex justify-between items-center pl-3 pr-10 h-20 w-full">
      {/* Left Section: Organization Switcher */}
      <div className="flex-1">
        <div>
          <button
            className="flex items-center gap-2 p-2 rounded-md"
            disabled
            aria-label="Open organization switcher"
          >
            <Avatar.Root className="size-10 flex items-center justify-center rounded-full border overflow-hidden">
              <Avatar.Image
                // src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yYlNHNFgxMmM2UHJvOG5IZFVLQWJtd3ROWEciLCJyaWQiOiJvcmdfMnI4N0NEUk9McWdkV25EcDVRRmllck5qbnEyIiwiaW5pdGlhbHMiOiJBIn0?width=160"
                alt="AmirMasood's Team"
                className="w-full h-full object-cover"
              />
              <Avatar.Fallback delayMs={600}>AT</Avatar.Fallback>
            </Avatar.Root>
            <span className="text-sm font-medium">AmirMasood's Team</span>
          </button>
        </div>
      </div>

      {/* Middle Section: Settings */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <g clipPath="url(#clip0_5055_2832)">
              <rect x="0.5" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="4.5" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="4.5" y="4" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="0.5" y="4" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="4.5" y="8" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="8.5" y="8" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="12.5" y="8" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="0.5" y="8" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="0.5" y="12" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="4.5" y="12" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect x="8.5" y="12" width="4" height="4" rx="1" fill="#FFE0C2" />
              <rect
                x="12.5"
                y="12"
                width="4"
                height="4"
                rx="1"
                fill="#FFE0C2"
              />
            </g>
            <defs>
              <clipPath id="clip0_5055_2832">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Settings</span>
        </div>
      </div>

      {/* Right Section: Navigation Links */}
      <nav className="flex-1 flex justify-end">
        <div className="flex gap-2 items-center">
          <a
            className="rounded-md opacity-90 bg-transparent flex h-10 px-4 justify-center items-center gap-3 text-primary hover:bg-[rgba(238,206,254,0.13)] font-inter text-base font-normal leading-6 cursor-pointer"
            href="https://zal.digital"
            target="_blank"
          >
            By <b>Zal</b>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
