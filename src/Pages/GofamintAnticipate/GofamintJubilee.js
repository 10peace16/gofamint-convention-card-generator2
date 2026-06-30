import React from "react";
import { useState,  useRef } from "react";
import html2canvas from "html2canvas";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import background from "../../Assets/backgroundfin.png";
import backgroundDyna from "../../Assets/backgroundDyna.png";
import backgroundPage from "../../Assets/backgroundPage.jpg";
// import theme from "../../Assets/themeGof.png";
// import year from "../../Assets/yearGof.png";
import cloudUpload from "../../Assets/cloudUpload.png";
import border from "../../Assets/borderGof.png";
import logo from "../../Assets/logoGof2.png";
import classes from "./GofamintJubilee.module.css";
import heic2any from "heic2any";
import { Spinner } from "react-bootstrap";
import gofamintCard from "../../Assets/GOFAMINT-card.png";
import wedding from "../../Assets/#ABISOL'26 IV.png";
import birthday from "../../Assets/BIGLOVESQUARE.png";
// import { toPng } from "html-to-image";

const creatorWorks = [
   {
    title: "GOFAMINT @ 70 Card Generator",
    description: "A responsive celebration card creator with image upload and one-click download.",
    image: gofamintCard,
  },
  {
    title: "Birthday Flyer",
    description: "Creative birthday celebration design.",
    image: birthday,
  },
  {
    title: "Wedding IV",
    description: "Creative wedding IV design.",
    image: wedding,
  },
];

const creatorLinks = [
  {
    label: "GitHub",
    href: "https://github.com/10peace16",
    icon: FaGithub,
  },
  {
    label: "Gmail",
    href: "mailto:gadelaka@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348118944292",
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gloryadelaka",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/10peace16",
    icon: FaInstagram,
  },
];


function GofamintJubilee() {
 
  const [formData, setFormData] = useState({
    fullName: "",
    joinYear: "",
    district: "",
    region: "",
    word: "",
    photo: null,
  });
  const [previewImage, setPreviewImage] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const cardRef = useRef(null);

  const currentYear = new Date().getFullYear();

  const yearsInGofamint = formData.joinYear
    ? currentYear - Number(formData.joinYear)
    : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ImageRef = useRef(null);

  const cloudUploadClick = () => {
    ImageRef.current.click();
  }
    
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const extension = file.name.split(".").pop().toLowerCase();

    // Allowed image types
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/bmp",
    ];
    const allowedExtensions = [
      "jpg",
      "jpeg",
      "png",
      "webp",
      "gif",
      "bmp",
      "heic",
      "heif",
    ];

    const isValid =
      allowedTypes.includes(file.type) ||
      allowedExtensions.includes(extension);

    if (!isValid) {
      alert(
        "Please upload a JPG, JPEG, PNG, WEBP, GIF, BMP, HEIC or HEIF image."
      );
      return;
    }

    // Check file size (5MB max)
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Image size should not exceed 5MB.");
      return;
    }

    let imageFile = file;

    // Convert HEIC/HEIF to JPEG
   if (
    extension === "heic" ||
    extension === "heif"
    ) {
      try {
        const result = await heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: 1,
      });

        const convertedBlob = Array.isArray(result)
        ? result[0]
        : result;

        imageFile = new File(
          [convertedBlob],
          file.name.replace(/\.(heic|heif)$/i, ".jpg"),
          {
            type: "image/jpeg",
          }
        );
      } catch (err) {
        alert("Failed to convert HEIC image.");
        return;
      }
    }

    // Save image
    setFormData((prev) => ({
      ...prev,
      photo: imageFile,
    }));

    // Preview image
    setPreviewImage(URL.createObjectURL(imageFile));
  };

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log({
        ...formData,
        yearsInGofamint,
      });
  };


// const downloadCard = async () => {
//   await document.fonts.ready;

//   const dataUrl = await toPng(cardRef.current, {
//     cacheBust: true,
//     pixelRatio: 4,
//   });

//   const link = document.createElement("a");
//   link.download = "GOFAMINT-70-Convention-Anticipate.png";
//   link.href = dataUrl;
//   link.click();
// };

// const downloadCard = async () => {

//   await document.fonts.ready;

//   const images = cardRef.current.querySelectorAll("img");

//   await Promise.all(
//     [...images].map((img) => {
//       if (img.complete) return Promise.resolve();

//       return new Promise((resolve) => {
//         img.onload = resolve;
//         img.onerror = resolve;
//       });
//     })
//   );

//   const canvas = await html2canvas(cardRef.current, {
//     scale: 4,
//     useCORS: true,
//     backgroundColor: null,
//     imageTimeout: 0,
//     logging: false,
//   });

//   const link = document.createElement("a");
//   link.download = "GOFAMINT-70-Convention-Anticipate.png";
//   link.href = canvas.toDataURL("image/png", 1.0);
//   link.click();
// };

const downloadCard = async () => {
  try {
    setIsDownloading(true);

    // await document.fonts.ready;

    // const images = cardRef.current.querySelectorAll("img");

    // await Promise.all(
    //   [...images].map((img) => {
    //     if (img.complete) return Promise.resolve();

    //     return new Promise((resolve) => {
    //       img.onload = resolve;
    //       img.onerror = resolve;
    //     });
    //   })
    // );

    const canvas = await html2canvas(cardRef.current, {
      scale: 4,
      useCORS: true,
      backgroundColor: null,
      imageTimeout: 0,
      logging: false,
    });

    const link = document.createElement("a");
    link.download = "GOFAMINT-70-Convention-Anticipate.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  } catch (error) {
    console.error(error);
    alert("Failed to download card.");
  } finally {
    // Hide spinner whether download succeeds or fails
    setIsDownloading(false);
  }
};


const regionText = formData.region ? `(RG${formData.region.toUpperCase()})` : "(Region)";
  

  return (
    <div className={classes.container}
      style={{
                backgroundImage: `url(${backgroundPage})`,
              }}
    >
      <div className={classes.dynamicBackdrop} aria-hidden="true">
        <img
          src={backgroundDyna}
          alt=""
          className={classes.dynamicBackdropImage}
        />
        <img
          src={backgroundDyna}
          alt=""
          className={`${classes.dynamicBackdropImage} ${classes.dynamicBackdropImageAlt}`}
        />
        <span className={classes.gloryLight} />
      </div>

      <Container className={`py-5 ${classes.pageContent}`}>
        <div className={classes.creatorNav}>
          <a href="#creator-portfolio" className={classes.creatorLink}>
            About the creator
            <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </div>

        <Row className="justify-content-center align-items-center g-4">
          <Col lg={5} md={6} className={classes.formColumn}>
            <Card className={`shadow ${classes.formCard}`}>
              <Card.Body>
                <h2 className={`mb-4 text-center ${classes.title}`}>
                  GOFAMINT @ 70
                </h2>

                <Form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>

                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Year Joined */}
                  <Form.Group className="mb-3">
                    <Form.Label>Year Joined GOFAMINT</Form.Label>

                    <Form.Control
                      type="number"
                      name="joinYear"
                      placeholder="e.g. 2021"
                      value={formData.joinYear}
                      onChange={handleChange}
                      min="1956"
                      max={currentYear}
                      required
                    />
                  </Form.Group>
                  
                  {/* District */}
                  <Form.Group className="mb-3">
                    <Form.Label>District</Form.Label>

                    <Form.Control
                      type="text"
                      name="district"
                      placeholder="Enter your district"
                      value={formData.district}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Region</Form.Label>

                    <Form.Control
                      type="text"
                      name="region"
                      placeholder="Enter your region"
                      value={formData.region}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Convention Reflection</Form.Label>

                    <Form.Control
                      as="textarea"
                      type="text"
                      name="word"
                      placeholder="Express yourself in one word or one sentence about this year's convention."
                      value={formData.word}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Department */}
                  {/* <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>

                    <Form.Select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select Department
                      </option>
                      <option value="Choir">
                        Choir
                      </option>
                      <option value="Ushering">
                        Ushering
                      </option>
                      <option value="Youth">
                        Youth
                      </option>
                      <option value="Media">
                        Media
                      </option>
                      <option value="Sunday School">
                        Sunday School
                      </option>
                    </Form.Select>
                  </Form.Group> */}

                  {/* Photo Upload */}
                  <div className={classes.imageUploadBox}>
                    <Button type="button" className={classes.uploadIcon} onClick={cloudUploadClick}>
                        <img src={cloudUpload} alt="cloudUpload" />
                    </Button>
                    <button
                      type="button"
                      className={classes.uploadTextButton}
                      onClick={cloudUploadClick}
                    >
                      Upload Picture
                    </button>
                  </div>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      required
                      ref={ImageRef}
                      style={{display: "none"}}
                    />
                  </Form.Group>
                  <Button
                  type="button"
                  variant="success"
                  className="w-100"
                  onClick={downloadCard}
                  disabled={isDownloading}
                >{isDownloading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    Generating...
                  </>
                ) : (
                  "Download Card"
                )}
                </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={7} md={6} className={classes.previewColumn}>
            {/* <div className={classes.socialPostWrapper}> */}
              <Card
                ref={cardRef}
                className={`border-0 shadow overflow-hidden ${classes.socialPostCard}`}
              >
                 <img
                    src={background}
                    alt="Background"
                    className={classes.backgroundImage}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                    }}
                  />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "180px",
                    fontWeight: 900,
                    opacity: 0.05,
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                >
                  70
                </div>
                {/* className="text-center p-4" */}
                <Card.Body className={classes.socialPostBody}> 
                  <div className={classes.postMain}>
                    {previewImage && (
                      <div className={classes.photoFrame}>
                        <img
                          src={previewImage}
                          alt="member"
                          className={classes.photoFrameImage}
                        />
                        <img
                          src={border}
                          alt="frame"
                          className={classes.photoFrameBorder}
                        />
                      </div>
                    )}

                    <div className={classes.postDetails}>
                      <h3 className={classes.memberName}>
                        {formData.fullName.toUpperCase() || "Your Name"}
                      </h3>

                      <p className={classes.memberDistrict}>
                        {formData.district.toUpperCase() || "District"} {regionText}
                      </p>

                      <h4 className={classes.postLabel}>
                        Proudly in GOFAMINT for 
                      </h4>

                      <h1 className={classes.postYears}>
                        {yearsInGofamint || 0} Year(s)
                      </h1>
                     <p className={classes.wordReflection}>
                        {formData.word
                          ? `"${formData.word}"`
                          : "Convention Reflection"}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            {/* </div> */}
          </Col>
        </Row>

        <section id="creator-portfolio" className={classes.creatorSection}>
          <Row className="align-items-center g-4">
            <Col lg={4}>
              <div className={classes.creatorPhotoShell}>
                <img
                  src={logo}
                  alt="Creator"
                  className={classes.creatorPhoto}
                />
              </div>
            </Col>

            <Col lg={8}>
              <p className={classes.creatorEyebrow}>About Me</p>
              {/* <h2 className={classes.creatorTitle}>Glory, Frontend Developer</h2> */}
              <p className={classes.creatorBio}>
                Hi, I'm Glory Adelaka (10Peace), a Frontend Developer and Graphics Designer passionate about creating responsive web applications and engaging visual designs. I build intuitive user interfaces with React and design professional flyers, event materials, and promotional graphics for churches, schools, businesses, birthdays, and other special occasions. I enjoy combining creativity and technology to create solutions that are both functional and visually appealing.
              </p>

              <div className={classes.workGrid}>
                {creatorWorks.map((work) => (
                  <article
                    key={work.title}
                    className={classes.workCard}
                    onClick={() => setSelectedImage(work.image)}
                  >
                    <div className={classes.imageOverlay}>
                      View Image
                    </div>

                    <h3>{work.title}</h3>

                    <p>{work.description}</p>
                  </article>
                ))}
              </div>
              {selectedImage && (
                <div
                  className={classes.modal}
                  onClick={() => setSelectedImage(null)}
                >
                  <img
                    src={selectedImage}
                    alt="Project"
                    className={classes.modalImage}
                  />
                </div>
              )}

              <div className={classes.socialLinks} aria-label="Creator social links">
                {creatorLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      href={link.href}
                      className={classes.socialLink}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default GofamintJubilee;
