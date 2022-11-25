const fetchTriviaQuestions = async (token, category = 0, difficulty = '', type = '') => {
  const url = `https://opentdb.com/api.php?amount=5&category=${category}&token=${token}&difficulty=${difficulty}&type=${type}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export default fetchTriviaQuestions;
