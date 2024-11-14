const loadPrimaryButton = document.getElementById('load-primary')
const loadSecondaryButton = document.getElementById('load-secondary')
// const row = document.getElementById('card-container')
arrayCard = []
myKey = 'SGRFuYeDdws8OIyzcKsA3l86T7XxJZPGdhfWqqmRcVSws5ib2p1tcG08'
loadPrimaryButton.addEventListener('click', () => {
  const card = document.querySelectorAll('.card')
  console.log(card)
  fetch('https://api.pexels.com/v1/search?query=nature', {
    headers: {
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('sbagliato')
      }
    })
    .then((foto) => {
      console.log('oggetto', foto.photos)
      card.forEach((card) => {
        let img = foto.photos[Math.floor(Math.random() * 10)]
        card.innerHTML = `
                        <img
                      src=${img.src.medium}
                      class="bd-placeholder-img h-50 card-img-top"
                    />
                    <div class="card-body h-50">
                      <h5 class="card-title">Lorem Ipsum</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                         onclick="hide(this)"
                            type="button"
                            class="btn btn-sm btn-outline-secondary hide"
                          >
                            Hide
                          </button>
                        </div>
                        <small class="text-muted">${img.id}</small>
                      </div>
                    </div>
                        
        `
      })
      return arrayCard
    })

    .catch((err) => {
      console.log('errore', err)
    })
})
loadSecondaryButton.addEventListener('click', () => {
  const card = document.querySelectorAll('.card')
  console.log(card)
  fetch('https://api.pexels.com/v1/search?query=mountain', {
    headers: {
      Authorization: myKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('sbagliato')
      }
    })
    .then((foto) => {
      console.log('oggetto', foto.photos)
      card.forEach((card) => {
        let img = foto.photos[Math.floor(Math.random() * 10)]
        card.innerHTML = `
                        <img
                      src=${img.src.medium}
                      class="bd-placeholder-img h-50 card-img-top"
                    />
                    <div class="card-body h-50">
                      <h5 class="card-title">Lorem Ipsum</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                          onclick="hide(this)"
                          type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            Hide
                          </button>
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                        
        `
      })
    })

    .catch((err) => {
      console.log('errore', err)
    })
})

function hide(button) {
  const cardWrapper = button.parentElement
  const body = cardWrapper.parentElement
  const nope = body.parentElement
  const card = nope.parentElement
  card.classList.add('d-none')
}
