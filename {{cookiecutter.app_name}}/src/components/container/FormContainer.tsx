import * as React from "react";
import Input from "../presentational/Input";

interface FormContainerState {
  value: string;
}
class FormContainer extends React.Component<{}, FormContainerState> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={value}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;
