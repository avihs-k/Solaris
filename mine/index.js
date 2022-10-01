const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let save = {}

function start() {
  save = {}
  showques(1)
}

function showques(quesIndex) {
  const ques = quess.find(ques => ques.id === quesIndex)
  textElement.innerText = ques.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  ques.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('optionSelect')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredsave == null || option.requiredsave(save)
}

function selectOption(option) {
  const nextquesId = option.nextText
  if (nextquesId <= 0) {
    return start()
  }
  save = Object.assign(save, option.setsave)
  showques(nextquesId)
}

const quess = [
  {
    id: 1,
    text: 'It\'s time for university placements.',
    options: [
      {
        text: 'Continue',
        nextText: 2
      }
    ]
  },
  
  {
    id: 2,
    text: 'I have three choices.',
    options: [
      {
        text: 'To participate in campus placements',
        nextText: 3
      },
      {
        text: 'Study abroad for a master\'s degree',
        nextText: 4
      },
      {
        text: 'To establish my own company',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'If I choose to take part in campus placements, I will have to spend the majority of my life doing a white collar job.',
    options: [
      {
        text: 'It\'s okay since the pay will be alright and theres no risk',
        nextText: 6
      },
      {
        text: 'Enter your perspective',
        nextText: 6
      }
      // {
      //   arr[0]= prompt('Enter your perspective')
      // }
    ]
  },
  
  {
    id: 4,
    text: 'I\'m not sure if I should pursue a master\'s degree because I worry that my family won\'t be able to afford the expense.',
    options: [
      {
        text: 'However, I believe it is acceptable because, in the end, I will be paid more than a typical white collar job.',
        nextText: 6
      },
      {
        text: 'Enter your perspective',
        nextText: 6
      }
      // {
      //   arr[1]= prompt('Enter your perspective')
      // }
    ]
  },
  
  {
    id: 5,
    text: 'I\'m worried about starting my own business because there\'s a lot of risk involved.',
    options: [
      {
        text: 'But I believe it is the best way for me to work.',
        nextText: 6
      },
      {
        text: 'Enter your perspective',
        nextText: 6
      }
      // {
      //   arr[2]= prompt('Enter your perspective')
      // }
    ]
  },

  {
    id: 6,
    text: 'Thank you for your insight',
    options: [
      {
        text: 'retry options',
        nextText: -1
      }
    ]
  }
]

start()