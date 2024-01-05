export const IntelliCar = (props:any) => {
    const {fillColor} = props;
    return(
        <svg width="128"  height="35" viewBox="0 0 128 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.58789 53.5194H2.93787L4.43387 43.9433H3.08389L1.58789 53.5194ZM16.2499 50.9754L12.5039 43.9433H11.446L9.94999 53.5194H11.3238L12.3937 46.5008L16.1277 53.5194H17.1856L18.6816 43.9433H17.3197L16.2499 50.9754ZM27.3983 45.3243L26.108 53.5194H27.4818L28.7722 45.3243H31.5585L31.7761 43.9433H24.8206L24.603 45.3243H27.4013H27.3983ZM42.707 53.5194L42.9395 52.0145H38.0134L38.4276 49.4436H42.8292L43.0467 48.0225H38.6452L39.0594 45.3947H43.6934L43.911 43.9433H37.915C37.6647 45.5489 37.4144 47.1443 37.167 48.7297C36.9197 50.3151 36.6694 51.9139 36.419 53.5161H42.707V53.5194ZM52.0317 43.9433H50.6698L49.1738 53.5194H55.0237L55.2412 52.0983H50.7532L52.0317 43.9467V43.9433ZM64.0056 43.9433H62.6437L61.1477 53.5194H66.9976L67.2152 52.0983H62.7272L64.0056 43.9467V43.9433ZM73.1217 53.5194H74.4717L75.9677 43.9433H74.6177L73.1217 53.5194ZM88.8416 52.3161L88.0757 51.2368C87.7181 51.5754 87.3247 51.8335 86.8956 52.0111C86.4665 52.1888 86.0523 52.2793 85.6559 52.2793C85.1046 52.2793 84.6457 52.1787 84.2821 51.9776C83.9185 51.7765 83.6324 51.515 83.4298 51.1899C83.2271 50.8648 83.099 50.4961 83.0454 50.0738C82.9917 49.6548 82.9977 49.2258 83.0632 48.7867C83.1288 48.3476 83.254 47.9152 83.4417 47.4862C83.6294 47.0572 83.8768 46.6784 84.1897 46.3432C84.5026 46.0114 84.8721 45.7399 85.2953 45.5354C85.7215 45.331 86.2042 45.2271 86.7496 45.2271C87.1459 45.2271 87.5244 45.3075 87.882 45.4651C88.2396 45.6259 88.5466 45.874 88.8058 46.2092L89.7922 45.1835C89.4346 44.6908 89.0234 44.3322 88.5525 44.1109C88.0817 43.8864 87.5602 43.7758 86.985 43.7758C86.1268 43.7758 85.3639 43.9467 84.6993 44.2886C84.0347 44.6305 83.4745 45.0796 83.0215 45.636C82.5685 46.1924 82.2228 46.8158 81.9874 47.5097C81.752 48.2035 81.6358 48.9006 81.6358 49.6012C81.6358 50.1408 81.7073 50.657 81.8533 51.153C81.9993 51.6491 82.2228 52.0882 82.5298 52.467C82.8367 52.8457 83.2242 53.1474 83.7039 53.3686C84.1837 53.5932 84.7589 53.7038 85.4324 53.7038C85.7483 53.7038 86.0523 53.6803 86.3443 53.6367C86.6364 53.5898 86.9224 53.5127 87.2026 53.4055C87.4827 53.2948 87.7569 53.1541 88.031 52.9731C88.3022 52.7954 88.5764 52.5742 88.8505 52.3094L88.8416 52.3161ZM101.194 51.5083L101.692 53.5194H103.089L100.768 43.9433H99.2838L93.9703 53.5194H95.4663L96.5838 51.5083H101.194ZM99.8321 45.5589L100.914 50.114H97.314L99.8321 45.5589ZM116.464 53.5194L116.366 53.2446L114.321 50.057C114.825 49.9766 115.254 49.819 115.612 49.5844C115.969 49.3531 116.261 49.0749 116.488 48.7565C116.714 48.4381 116.881 48.0895 116.985 47.7175C117.09 47.3421 117.143 46.9734 117.143 46.608C117.143 46.2427 117.09 45.9142 116.985 45.5958C116.881 45.2774 116.723 44.9925 116.512 44.7478C116.3 44.5031 116.035 44.3053 115.716 44.1612C115.394 44.0137 115.016 43.9433 114.578 43.9433C113.913 43.9433 113.254 43.9433 112.602 43.9366C111.949 43.9299 111.291 43.9299 110.626 43.9299L109.118 53.5194H110.48L111.001 50.2078H112.801L114.87 53.5194H116.464ZM111.758 45.3377H114.36C114.604 45.3377 114.813 45.3813 114.986 45.4684C115.159 45.5556 115.302 45.6662 115.412 45.8036C115.522 45.941 115.603 46.0985 115.656 46.2762C115.71 46.4538 115.737 46.6348 115.737 46.8158C115.737 47.0605 115.695 47.3052 115.615 47.5465C115.534 47.7879 115.415 48.0024 115.257 48.1901C115.099 48.3778 114.899 48.5286 114.661 48.6426C114.423 48.7565 114.139 48.8135 113.815 48.8135H111.225L111.761 45.3377H111.758Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.925 36.1168C16.3895 34.7258 18.6394 33.1639 20.9579 31.7796C30.8101 25.914 39.6788 19.7165 50.6812 15.7279C57.8036 13.147 62.2112 13.3883 69.0862 16.1468C74.2924 18.235 79.2751 21.4561 83.8674 24.2615C90.7037 28.4379 95.9814 32.098 103.84 33.9616C111.6 35.8018 122.096 37.4039 124.501 42.1065C126.289 45.6192 119.751 48.6224 120.636 49.9832C135.357 39.9915 121.384 35.842 111.77 33.2879C107.07 32.041 104.275 31.4042 101.623 30.3953C94.0146 27.5027 84.5379 20.055 76.7391 15.7748C62.7655 8.10255 56.2152 8.58521 41.9556 15.4162C39.2735 16.6999 21.3781 27.2111 13.0727 32.2086C11.3233 33.2611 3.3874 38.3525 5.16352 32.0813L10.9806 11.5281L0.910952 12.1783L0.395398 14.3034C2.51125 14.3034 3.79865 14.4307 4.26056 14.6788C5.57477 15.4061 4.65691 18.0574 4.3142 19.2037C2.98211 23.8392 1.2179 29.0546 0.255334 33.7438C-0.704251 38.3525 1.06294 41.2317 5.18438 40.2496C8.42373 39.4787 11.0313 37.7458 13.922 36.1135L13.925 36.1168Z" fill={fillColor}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2527 1.35878C11.8875 2.05931 12.2093 2.93748 12.2093 3.95307C12.2093 4.96866 11.8875 5.83678 11.2319 6.56076C10.5882 7.29816 9.81932 7.66015 8.9253 7.66015C8.03127 7.66015 7.26241 7.29816 6.61871 6.56076C5.98396 5.83678 5.66211 4.95861 5.66211 3.95307C5.66211 2.94753 5.97502 2.05931 6.60679 1.35878C7.22963 0.644851 8.01041 0.296265 8.9253 0.296265C9.84018 0.296265 10.609 0.648203 11.2527 1.35878Z" fill={fillColor}/>
        </svg> 
    )
}