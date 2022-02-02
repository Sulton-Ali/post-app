import React from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import editLogo from '../../assets/icons/edit.svg';
import deleteLogo from '../../assets/icons/delete.svg';
import postService from "../../services/httpServices/postService";
import CheckAccess from "../CheckAccess/CheckAccess";
import {ROLES} from "../../utils/constants";

function Post(props) {
    const {post, setDeleteModalOptions} = props;
    const navigate = useNavigate();


    return (
        <div className="post" style={{width: "20rem"}}>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={post.imgUrl}/>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => navigate(`/posts/${post._id}`)}>Batafsil...</Button>
                    <CheckAccess roles={[ROLES.ADMIN]}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" className="ms-auto" onClick={() => setDeleteModalOptions({
                                type: "edit",
                                show: true,
                                post: post,
                                title: "Postni tahrirlash",
                                cancelLabel: "Bekor qilish",
                                okLabel: "Tahrirlash"
                            })}>
                                <img src={editLogo} alt="edit logo" width={24} height={24}/>
                            </Button>
                            <Button variant="danger" onClick={() => setDeleteModalOptions({
                                type: "delete",
                                show: true,
                                post: post,
                                title: "Postni o`chirish",
                                cancelLabel: "Bekor qilish",
                                okLabel: "Ha",
                                body: `Siz rostdan ham ${post.title}ni o\`chirishni xohlaysizmi?`
                            })}>
                                <img src={deleteLogo} alt="delete logo" width={24} height={24}/>
                            </Button>
                        </ButtonGroup>
                    </CheckAccess>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Post;
