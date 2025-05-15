document.getElementById('btnSaludo').addEventListener('click', async () => {
  try {
    const res = await axios.get('/api/saludo');
    document.getElementById('respuesta').textContent = res.data.mensaje;
  } catch (error) {
    document.getElementById('respuesta').textContent = 'Error al obtener el saludo.';
    console.error(error);
  }
});

