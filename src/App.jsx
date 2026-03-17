import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header title="My First React App" />

      <section className="section">
        <h2 className="section-title">Feature Cards</h2>
        <div className="cards-grid">
          <Card
            title="Learn React"
            description="React lets you build user interfaces from individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video."
          />
          <Card
            title="Think in Components"
            description="Break your UI into a component hierarchy. Each component should ideally do one thing. If it grows, decompose it into smaller sub-components."
          />
          <Card
            title="State & Props"
            description="Props let you pass data from parent to child. State lets a component remember information between renders. Together they power your entire app."
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Actions</h2>
        <div className="buttons-row">
          <Button label="Get Started" color="#667eea" />
          <Button label="Learn More" color="#e74c3c" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Team Profiles</h2>
        <div className="profiles-grid">
          <UserProfile
            name="Kabir"
            email="kabir@example.com"
            role="Developer"
          />
          <UserProfile
            name="Ali"
            email="ali@example.com"
            role="Designer"
          />
          <UserProfile
            name="Warda"
            email="warda@example.com"
            role="Manager"
          />
        </div>
      </section>
    </div>
  )
}

export default App
