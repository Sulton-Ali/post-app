import React, {useEffect, useState} from "react";
import postService from "../../services/httpServices/postService";
import Post from "../../components/Post/Post";
import {Button, Modal, Toast} from "react-bootstrap";
import CheckAccess from "../../components/CheckAccess/CheckAccess";
import {ROLES} from "../../utils/constants";
import {Link} from "react-router-dom";
import PostAdd from "../PostAdd/PostAdd";

const modalOptionsInitial = {
    show: false, post: null, title: null, cancelLabel: null, okLabel: null, body: null
}

function Posts() {
    const [posts, setPosts] = useState([]);
    const [toast, setToast] = useState({
        show: false, content: null
    });
    const [modalOptions, setModalOptions] = useState(modalOptionsInitial);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = () => {
        postService
            .getPosts()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((e) => console.log(e));
    }

    const handleClose = () => setModalOptions(modalOptionsInitial);

    const deletePost = (id) => {
        postService.deletePostById(id)
            .then(() => {
                handleClose();
                loadPosts();
                setToast({
                    show: true,
                    content: "Post muvaffaqiyatli o`chirildi"
                });
            })
            .catch(e => {
                console.log(e.message);
            });
    }

    const onPostUpdated = () => {
        handleClose();
        loadPosts();
        setToast({
            show: true, content: "Post muvaffaqiyatli tahrirlandi"
        })
    }

    const modalShow = (options) => {
        return (<Modal show={options.show} onHide={handleClose}>
            <Modal.Header closeButton>
                {options.type === "delete" && <Modal.Title>{options.title}</Modal.Title>}
            </Modal.Header>
            <Modal.Body>{options.type === "delete" ? options.body : (
                <PostAdd post={options.post} onPostUpdated={onPostUpdated}/>
            )}</Modal.Body>
            {options.type === "delete" && (<Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {options.cancelLabel}
                </Button>
                <Button variant="primary" onClick={() => deletePost(options.post._id)}>
                    {options.okLabel}
                </Button>
            </Modal.Footer>)}
        </Modal>);
    }

    return (<div className="w-100 posts rounded-3 p-3">
        <div className="w-100 bg-white shadow rounded-3 p-3 mb-2 d-flex justify-content-between align-items-center">
            <h3 className="fs-3 fw-bold text-black-50">Postlar</h3>
            <div>
                <CheckAccess roles={[ROLES.ADMIN, ROLES.USER]}>
                    <Link to="/posts/add">
                        <Button variant="primary">Post yaratish</Button>
                    </Link>
                </CheckAccess>
            </div>
        </div>
        {toast.show &&
            <Toast className="w-100" show={toast.show} onClose={() => setToast({show: false, content: null})}>
                <Toast.Header
                    className="d-flex justify-content-between bg-success text-white">{toast.content}</Toast.Header>
            </Toast>
        }
        {modalOptions.show && modalShow(modalOptions)}
        <div className="row flex-wrap justify-content-start rounded-3 bg-white shadow-lg p-md-5 p-sm-3 p-2 m-0 g-4">
            {posts.map((post, index) => (<Post key={index} post={post} setDeleteModalOptions={setModalOptions}/>))}
        </div>
    </div>);
}

export default Posts;
