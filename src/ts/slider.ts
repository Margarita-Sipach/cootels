const SLIDES_AMOUNT = 5;

const nextSlide = (i: number) => {
    const sliderWrapper: HTMLElement = document.querySelector('.customers__wrapper')!;
    sliderWrapper!.style.transform = `translateX(${-100 * i}%)`;
}

const nextPoint = (i: number) => {
    const points = document.querySelectorAll('.customers__point');

    for(const point of points){
        point.classList.remove('customers__point_active')
    }
    points[i < SLIDES_AMOUNT ? i : i = 0].classList.add('customers__point_active')
}

export const startSlider = () => {
    const sliderWrapper: HTMLElement = document.querySelector('.customers__wrapper')!;
    const defaultSliderWrapper = sliderWrapper.innerHTML;

    let i = 0, page = 0;

    nextSlide(0)
    nextPoint(0)

    setInterval(() => {
        i++;
        console.log(i, page, i + page * 5)
        nextSlide(i + page * 5)
        nextPoint(i)

        if(i === SLIDES_AMOUNT - 1){
            i -= SLIDES_AMOUNT;
            page++;
            sliderWrapper.insertAdjacentHTML('beforeend', defaultSliderWrapper)
        }

    }, 3000)
}

