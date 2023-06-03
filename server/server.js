const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 허용되는 HTTP 메서드
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 허용되는 요청 헤더
    next();
  });

app.get("/api", (req, res) =>{
    res.json({"users":["userOne", "userTwo", "userTree","userFour", "userFive"]})
})

// dominant_colors 값을 받아서 저장하는 엔드포인트
app.post('/api/dominant-colors', (req, res) => {
  const { dominant_colors } = req.body;
  dominantColors = dominant_colors;
  console.log("Dominant colors received:", dominantColors);
  res.sendStatus(200);
});

// dominant_colors 값을 반환하는 엔드포인트
app.get('/api/dominant-colors', (req, res) => {
  res.json({ dominantColors });
});

app.listen(5000, ()=>{console.log("server started on port 5000")})