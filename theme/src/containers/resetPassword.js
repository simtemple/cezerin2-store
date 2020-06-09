import React from "react"
import { themeSettings, text } from "../lib/settings"
import MetaTags from "../components/metaTags"
import ResetPassword from "../components/resetPassword/index"

const ResetPasswordContainer = props => {
  const {
    state: { pageDetails, loginUser },
  } = props

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="content">
            <ResetPassword {...props} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ResetPasswordContainer
