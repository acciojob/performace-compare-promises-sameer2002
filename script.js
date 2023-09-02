// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

const fetchTime = async (promise) => {
    const startTime = Date.now();
    await promise;
    return Date.now() - startTime;
};

const fetchData = async () => {
    const allPromises = apiUrls.map(url => fetch(url).then(res => res.json()));

    const allTime = await fetchTime(Promise.all(allPromises));
	document.getElementById('output-all').innerText = allTime + 'ms';

    const anyTime = await fetchTime(Promise.any(allPromises));
    document.getElementById('output-any').innerText = anyTime + 'ms';
}

fetchData();
