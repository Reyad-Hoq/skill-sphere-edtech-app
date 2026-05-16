export const getData = async () => {
  const res = await fetch('https://skill-sphere-server-wv1b.onrender.com/courses');
  const data = await res.json();
  return data;
}

export const getCourseData = async (id) => {
  const res = await fetch(`https://skill-sphere-server-wv1b.onrender.com/courses/${id}`);
  const data = await res.json();
  return data;
}