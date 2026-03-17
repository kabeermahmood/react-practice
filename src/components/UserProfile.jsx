import './UserProfile.css'

function UserProfile({ name, email, role }) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div className="profile-card">
      <div className="profile-avatar">{initials}</div>
      <h3 className="profile-name">{name}</h3>
      <span className="profile-role">{role}</span>
      <div className="profile-divider"></div>
      <p className="profile-email">{email}</p>
    </div>
  )
}

export default UserProfile
