import { twMerge } from "tailwind-merge";

export const Footer = () => {
  return (
    <div className=" px-[50px] h-[129px] mx-auto font-visuelt text-white">
      <div className="h-6 absolute bottom-[30px] mx-auto ">
        <svg
          width={108}
          height={20}
          viewBox="0 0 108 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[108px] h-5 absolute left-0 top-0.5"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_1_272)">
            <path
              d="M16.7125 6.6525C16.7217 6.7975 16.7217 6.94166 16.7217 7.08833C16.7217 11.5367 13.455 16.6667 7.48 16.6667V16.6642C5.70728 16.6647 3.97422 16.1395 2.5 15.155C2.75667 15.1867 3.015 15.2025 3.27333 15.2033C4.74434 15.2015 6.16951 14.6913 7.3075 13.7592C5.9175 13.7325 4.69917 12.7925 4.2725 11.4217C4.75909 11.5188 5.26183 11.4988 5.73917 11.3633C4.225 11.0467 3.13333 9.66666 3.13333 8.06333V8.02166C3.58268 8.28165 4.08945 8.42624 4.60833 8.4425C3.18 7.45416 2.74 5.48583 3.60167 3.9475C5.25167 6.05083 7.685 7.32916 10.2967 7.46416C10.1668 6.89231 10.185 6.29679 10.3495 5.73393C10.514 5.17106 10.8193 4.65946 11.2367 4.2475C11.5429 3.94536 11.9073 3.70865 12.3079 3.55176C12.7084 3.39488 13.1367 3.32109 13.5667 3.33488C13.9966 3.34868 14.4193 3.44977 14.8089 3.63202C15.1986 3.81426 15.5471 4.07385 15.8333 4.395C16.5632 4.24528 17.2613 3.96889 17.8958 3.57833C17.6542 4.35666 17.1458 5.01916 16.4683 5.43916C17.1137 5.35979 17.7429 5.18071 18.3333 4.90833C17.9009 5.58134 17.3521 6.17195 16.7125 6.6525Z"
              fill="#A1A1AA"
            />
          </g>
          <g clip-path="url(#clip1_1_272)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54 1.66663C49.3958 1.66663 45.6667 5.48996 45.6667 10.2108C45.6667 13.9916 48.0517 17.185 51.365 18.3166C51.7817 18.3916 51.9375 18.135 51.9375 17.9108C51.9375 17.7083 51.9267 17.0358 51.9267 16.3191C49.8333 16.7158 49.2917 15.7975 49.125 15.3166C49.0308 15.0708 48.625 14.3125 48.2708 14.11C47.9792 13.95 47.5625 13.5541 48.26 13.5433C48.9167 13.5333 49.385 14.1633 49.5417 14.4191C50.2917 15.7116 51.49 15.3491 51.9683 15.1241C52.0417 14.5691 52.26 14.195 52.5 13.9816C50.6458 13.7683 48.7083 13.0316 48.7083 9.76329C48.7083 8.83413 49.0308 8.06496 49.5625 7.46663C49.4792 7.25329 49.1875 6.37746 49.6458 5.20246C49.6458 5.20246 50.3433 4.97829 51.9375 6.07829C52.6042 5.88663 53.3125 5.78996 54.0208 5.78996C54.7292 5.78996 55.4375 5.88579 56.1042 6.07829C57.6975 4.96746 58.3958 5.20329 58.3958 5.20329C58.8542 6.37746 58.5625 7.25329 58.4792 7.46663C59.01 8.06496 59.3333 8.82329 59.3333 9.76329C59.3333 13.0416 57.3858 13.7683 55.5317 13.9816C55.8333 14.2483 56.0942 14.7616 56.0942 15.5625C56.0942 16.705 56.0833 17.6233 56.0833 17.9125C56.0833 18.1358 56.24 18.4033 56.6567 18.3175C58.3207 17.7374 59.7591 16.6466 60.7667 15.2008C61.788 13.7373 62.3349 11.9954 62.3333 10.2108C62.3333 5.48996 58.6042 1.66663 54 1.66663Z"
              fill="#A1A1AA"
            />
          </g>
          <g clip-path="url(#clip2_1_272)">
            <path
              d="M103.279 15.2825H101.058V11.8017C101.058 10.9717 101.042 9.90333 99.9 9.90333C98.7425 9.90333 98.5658 10.8067 98.5658 11.7408V15.2825H96.3442V8.125H98.4775V9.1H98.5067C98.805 8.53833 99.53 7.94417 100.613 7.94417C102.863 7.94417 103.28 9.42583 103.28 11.3533V15.2825H103.279ZM93.8358 7.14583C93.6663 7.14605 93.4984 7.11281 93.3417 7.04801C93.1851 6.9832 93.0427 6.88812 92.9229 6.7682C92.803 6.64828 92.708 6.50588 92.6433 6.34918C92.5786 6.19247 92.5455 6.02454 92.5458 5.855C92.546 5.59986 92.6218 5.3505 92.7637 5.13846C92.9056 4.92641 93.1072 4.76119 93.3429 4.66371C93.5787 4.56623 93.8381 4.54085 94.0883 4.59078C94.3385 4.64072 94.5683 4.76373 94.7486 4.94426C94.9289 5.12478 95.0516 5.35472 95.1012 5.60498C95.1508 5.85525 95.1251 6.11461 95.0273 6.35026C94.9295 6.58592 94.7641 6.78728 94.5518 6.92889C94.3396 7.0705 94.0901 7.146 93.835 7.14583H93.8358ZM94.9492 15.2825H92.7217V8.125H94.95V15.2825H94.9492ZM104.392 2.5H91.6075C90.9942 2.5 90.5 2.98333 90.5 3.58083V16.4192C90.5 17.0167 90.995 17.5 91.6067 17.5H104.388C105 17.5 105.5 17.0167 105.5 16.4192V3.58083C105.5 2.98333 105 2.5 104.388 2.5H104.391H104.392Z"
              fill="#A1A1AA"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_272">
              <rect width={20} height={20} fill="white" />
            </clipPath>
            <clipPath id="clip1_1_272">
              <rect
                width={20}
                height={20}
                fill="white"
                transform="translate(44)"
              />
            </clipPath>
            <clipPath id="clip2_1_272">
              <rect
                width={20}
                height={20}
                fill="white"
                transform="translate(88)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="w-[502.16px] h-6 absolute left-[410.66px] top-0">
          <button
            className={twMerge(
              "w-[102.62px] h-[17px] absolute left-0 top-[3px] text-sm font-medium text-left text-zinc-200",
              "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
              "hover:bg-gray-500",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              // Register all radix states
              "group",
              "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
              "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
              "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
            )}
          >
            Documentation
          </button>
          <p className="w-[68.79px] h-[17px] absolute left-[126.42px] top-[3px] text-sm font-medium text-left text-zinc-200">
            Directory
          </p>
          <p className="w-[46.45px] h-[17px] absolute left-[219.02px] top-[3px] text-sm font-medium text-left text-zinc-200">
            Pricing
          </p>
        </div>
        <p className="w-[184.72px] h-[17px] absolute left-[889.47px] top-[3px] text-sm text-left text-zinc-500">
          websitesdealer.com
        </p>
      </div>
      <svg
        width={1218}
        height={131}
        viewBox="0 0 1218 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[31px] top-[-1px]"
        preserveAspectRatio="none"
      >
        <path d="M1217 1H1V130H1217V1Z" stroke="#3F3F46" stroke-opacity="0.4" />
      </svg>
    </div>
  );
};
