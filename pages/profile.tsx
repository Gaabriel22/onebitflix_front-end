import Head from "next/head"
import styles from "../styles/profile.module.scss"
import UserForm from "@/components/profile/user"
import HeaderAuth from "@/components/common/headerAuth"
import { Button, Col, Container, Row } from "reactstrap"
import Footer from "@/components/common/footer"

const UserInfo = function () {
    return (
        <>
            <Head>
                <title>Onebitflix - Meus Dados</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <Container className="py-5">
                    <p className={styles.title}>Minha Conta</p>
                    <Row className={styles.title}>
                        <Col className={styles.title}>
                            <Button outline className={styles.renderFormBtn}>
                                DADOS PESSOAIS
                            </Button>
                            <Button outline className={styles.renderFormBtn}>
                                SENHA
                            </Button>
                        </Col>
                        <Col md>
                            <UserForm />
                        </Col>
                    </Row>
                </Container>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default UserInfo