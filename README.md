Here is a **professional, recruiter-friendly `README.md`** for your **AI Movie Insight Builder** assignment. You can copy-paste it into your project.

---

# 🎬 AI Movie Insight Builder

An AI-powered movie insights application where users can enter an **IMDb movie ID** to explore detailed movie information along with **AI-generated audience sentiment analysis**.

The application fetches movie data, analyzes audience perception using AI, and presents the insights in a **modern, responsive UI**.

---

# 🚀 Live Features

### 🔎 Smart Movie Search

Users can enter an **IMDb movie ID** (example: `tt0133093`) to retrieve movie details.

### 🎥 Movie Details

Displays:

* Movie title
* Poster
* Release year
* IMDb rating
* Plot summary

### 👥 Cast Section

Shows the **top cast members** of the movie.

### 🧠 AI Audience Sentiment

Uses a **HuggingFace NLP model** to analyze the movie plot and classify audience sentiment.

Output includes:

* Sentiment label (Positive / Negative)
* Sentiment score
* Visual sentiment meter

### 📊 AI Audience Insight

Displays an AI-generated insight summarizing how audiences feel about the movie.

### 🧾 Audience Reviews

Shows sample review cards for better user experience.

### 📱 Responsive UI

The interface works smoothly across:

* Desktop
* Tablet
* Mobile devices

---

# 🛠 Tech Stack

### Frontend

* **Next.js (React)**
* Tailwind CSS
* Modern component architecture

### Backend

* **Next.js API Routes**

### APIs Used

* **OMDb API** → Movie metadata
* **HuggingFace Inference API** → AI Sentiment Analysis

### AI Model

```
distilbert-base-uncased-finetuned-sst-2-english
```

This model is used to classify sentiment from movie plot text.

---

# 🧱 Project Architecture

```
app
 ├── api
 │    ├── movie/[id]/route.js
 │    └── sentiment/route.js
 │
 ├── movie/[id]/page.js
 │
components
 ├── Navbar.jsx
 ├── SearchBar.jsx
 ├── MovieHero.jsx
 ├── CastList.jsx
 ├── SentimentCard.jsx
 └── ReviewList.jsx
```

---

# ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-movie-insight-builder.git
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Add Environment Variables

Create a `.env.local` file:

```
OMDB_API_KEY=your_omdb_key
HF_TOKEN=your_huggingface_token
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🧪 Example Movie IDs

You can test the application with these IMDb IDs:

```
tt0133093  → The Matrix
tt0111161  → The Shawshank Redemption
tt0468569  → The Dark Knight
tt1375666  → Inception
```

---

# 📸 Screenshots

### Movie Page

Displays poster, rating, plot, and cast.

### AI Sentiment Card

Shows audience sentiment score and classification.

### Audience Reviews

Displays review cards for better engagement.

*(Add screenshots here if submitting on GitHub)*

---

# ⚠️ Assumptions

* Movie data is retrieved from **OMDb API**
* Sentiment analysis is performed on **movie plot text**
* Audience reviews are simulated if real review data is unavailable
* API rate limits may affect sentiment requests

---

# 🧹 Code Quality Practices

The project follows:

* Modular component structure
* Clear function naming
* Error handling for APIs
* Async/await best practices
* Environment variable security
* Clean UI components

---

# 🔮 Possible Future Improvements

* Real **IMDb review scraping**
* AI **summary generation using LLM**
* Movie **autocomplete search**
* Trending movie recommendations
* Advanced AI insights dashboard
* User ratings & comments

---

# 👨‍💻 Author

**Roshan Sharma**

Software Developer
Focused on building **AI-powered web applications and scalable backend systems**.

LinkedIn:
[https://www.linkedin.com/in/theroshancool/](https://www.linkedin.com/in/theroshancool/)

---

# ⭐ Conclusion

This project demonstrates:

* API integration
* AI/NLP model usage
* Modern React architecture
* Clean UI design
* Full-stack development using Next.js

The **AI Movie Insight Builder** provides an interactive way to explore movie data while showcasing how AI can enhance user insights.


---

