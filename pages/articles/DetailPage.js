
import React, { PropTypes } from 'react'

import Layout from '../layout'
import styles from './styles.css'

export default class DetailPage extends React.Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
  }

  componentDidMount() {
    // document.title = title;
  }

  render() {
    const { module, name } = this.props.params

    // 动态加载？
    const { title, html } = require(`../../articles/${module}/${name}.md`)

    console.log(styles)

    return (
      <Layout className="articles-detail">
        <div  className={styles.markdownWrap}>
          <h1 className={styles.h1}>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

      </Layout>
    )
  }

}
