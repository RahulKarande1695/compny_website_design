export const BxNotification = (props:any) => {
    const {colorFill}=props
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M54 27C58.9706 27 63 22.9706 63 18C63 13.0294 58.9706 9 54 9C49.0294 9 45 13.0294 45 18C45 22.9706 49.0294 27 54 27Z"
                fill={colorFill}
            />
            <path
                d="M54 57H15V18H39C39 15.864 39.459 13.839 40.266 12H15C11.691 12 9 14.691 9 18V57C9 60.309 11.691 63 15 63H54C57.309 63 60 60.309 60 57V31.734C58.1095 32.5678 56.0662 32.999 54 33V57Z"
                fill={colorFill}
            />
        </svg>
    );
};