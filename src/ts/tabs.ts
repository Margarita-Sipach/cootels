export const toggleTab = () => {
    const tabs = document.querySelector('.tabs');
    tabs?.addEventListener('click', (e) => {
        const { target } = e;
        const tab = (target as HTMLElement)?.closest('.tabs__item')
        tab?.classList.toggle('tabs__item_active')
    })
}