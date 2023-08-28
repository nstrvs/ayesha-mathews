function addStylesheet() {
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = 'https://ayesha-mathews.vercel.app/index.css';

    document.head.appendChild(link);
}

export default addStylesheet;
