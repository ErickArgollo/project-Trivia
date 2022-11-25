const fetchTriviaCategorys = async () => {
  const url = 'https://opentdb.com/api_category.php';
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export default fetchTriviaCategorys;
