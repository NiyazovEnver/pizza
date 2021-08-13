import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'slider',
    startAt: 1,
    gap: 10,
    peek: {
        before: 20,
        after: 20
      }
  }).mount();
