import React from 'react'

const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  return (
    <div
      className={
            notification.isError
              ? 'alert alert-danger'
              : 'alert alert-success'
        }
      role="alert"
    >
      {notification.message}
    </div>
  )
}

export default Notification
