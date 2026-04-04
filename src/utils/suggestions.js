export const getWearSuggestion = (temperature) => {
  if (temperature >= 30) {
    return {
      title: 'Keep it light',
      description:
        'Choose breathable cotton clothing, sunglasses, and stay hydrated because it is quite hot outside.'
    };
  }

  if (temperature >= 20) {
    return {
      title: 'Comfortable layers',
      description:
        'A t-shirt or light shirt with jeans works well. Carry a thin layer for the evening just in case.'
    };
  }

  if (temperature >= 10) {
    return {
      title: 'Bring a jacket',
      description:
        'Wear a sweater or light jacket to stay comfortable, especially if the wind picks up later in the day.'
    };
  }

  return {
    title: 'Bundle up',
    description:
      'Go for warm layers, a heavier coat, and closed shoes. Add a scarf if you expect wind or rain.'
  };
};