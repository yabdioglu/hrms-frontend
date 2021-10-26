import React, { Component } from "react";
import { toast } from "react-toastify";
import { Button, Card} from 'semantic-ui-react'
import CurriculumVitaeService from "../../services/CurriculumVitaeService";

export default class ImageUpdate extends Component {
    state = {
        selectedFile : null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        let cvId = 79;
        const fd = new FormData();
        fd.append(
            "multipartFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        )
            let curriculumVitaeService = new CurriculumVitaeService();
            curriculumVitaeService.updateImage(fd, cvId).then((result) => {toast.success(result.data.message)})
    }
    render() {
        return (
          <div>
            <Card fluid color="orange">
              <Card.Content>
              <input 
              type="file" 
              onChange={this.fileSelectedHandler}
              style={{display: 'none'}}
              ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <Button className="ui button" onClick={() => this.fileInput.click()}>Pick File</Button>
              <Button onClick={this.fileUploadHandler}>Upload</Button>
              </Card.Content>
            </Card>
          </div>
        );
      }
}

