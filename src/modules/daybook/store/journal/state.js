function state () {
  return {
    isLoading: true,
    entries: [
      {
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus quam corporis cupiditate harum beatae soluta voluptatibus labore rerum repudiandae, facere praesentium voluptatum. Vitae, ipsam dicta. Dicta doloremque placeat nostrum.',
        pictures: null
      },
      {
        id: new Date().getTime() + 1000,
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus quam corporis cupiditate harum beatae soluta voluptatibus labore rerum repudiandae, facere praesentium voluptatum. Vitae, ipsam dicta. Dicta doloremque placeat nostrum.',
        pictures: null
      },
      {
        id: new Date().getTime() + 2000,
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus quam corporis cupiditate harum beatae soluta voluptatibus labore rerum repudiandae, facere praesentium voluptatum. Vitae, ipsam dicta. Dicta doloremque placeat nostrum.',
        pictures: null
      }
    ]
  }
}

export default state
