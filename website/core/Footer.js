/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    // FIXME: this is a second argument but for some reason /en/ links don't work.
    let language = "";

    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc) {
    // FIXME: this is a second argument but for some reason /en/ links don't work.
    let language = "";

    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="66" height="58" />}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("documentation-intro", this.props.language)}>Intro</a>
            <a href={this.docUrl("getting-started", this.props.language)}>Get Started</a>
            <a href={this.docUrl("feature-1", this.props.language)}>Feature 1</a>
          </div>
          
          
      
         
       </section>

        <section className="generated-details">
          
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
