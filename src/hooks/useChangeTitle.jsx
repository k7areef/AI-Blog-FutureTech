import React from 'react';
function useChangeTitle(title = "Future Tech - Home") {
    React.useEffect(() => {
        window.document.title = "Future Tech - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;