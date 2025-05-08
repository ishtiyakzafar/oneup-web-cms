import React, { useEffect, useState } from "react";
import "./AddUpdateIpoContent.css";
import { addIpoContentDetail } from "services/ipo_content";
import Swal from "sweetalert2";
import { getIpoContentsById } from "services/ipo_content";
import { useParams, useLocation } from "react-router-dom";
import { updateIpoContentDetail } from "services/ipo_content";

const AddUpdateIpoContent = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { pathname } = useLocation();

  const [ipoContent, setIpoContent] = useState({
    issuecode: "",

    heading_one: "",
    title_1: "",
    description_1: "",
    title_2: "",
    description_2: "",
    title_3: "",
    description_3: "",

    heading_two: "",
    description_two: "",
    parent_company: "",
    founded: "",
    managing_director: "",

    heading_three: "",
    title_11: "",
    description_11: "",
    title_22: "",
    description_22: "",
    title_33: "",
    description_33: "",
    title_111: "",
    description_111: "",
    title_222: "",
    description_222: "",
    title_333: "",
    description_333: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setIpoContent((prev) => ({ ...prev, [name]: value }));
  };


  const addUpdateIpoContent = async (e) => {
    e.preventDefault();

    const body = {
      "issuecode": ipoContent.issuecode,
      "content_one": {
        "heading": ipoContent.heading_one,
        "content": [
          {
            "title": ipoContent.title_1,
            "description": ipoContent.description_1
          },
          {
            "title": ipoContent.title_2,
            "description": ipoContent.description_2
          },
          {
            "title": ipoContent.title_3,
            "description": ipoContent.description_3
          }
        ]
      },
      "content_two": {
        "heading": ipoContent.heading_two,
        "description": ipoContent.description_two,
        "parent_company": ipoContent.parent_company,
        "founded": ipoContent.founded,
        "managing_director": ipoContent.managing_director,
      },
      "content_three": {
        "heading": ipoContent.heading_three,
        "strengths": {
          "content": [
            {
              "title": ipoContent.title_11,
              "description": ipoContent.description_11,
            },
            {
              "title": ipoContent.title_22,
              "description": ipoContent.description_22,
            },
            {
              "title": ipoContent.title_33,
              "description": ipoContent.description_33,
            },
          ]
        },
        "potential_risks": {
          "content": [
            {
              "title": ipoContent.title_111,
              "description": ipoContent.description_111,
            },
            {
              "title": ipoContent.title_222,
              "description": ipoContent.description_222,
            },
            {
              "title": ipoContent.title_333,
              "description": ipoContent.description_333,
            },
          ]
        }
      }
    }

    try {
      setLoading(true);
      if (id) {
        await updateIpoContentDetail(id, body);
        Swal.fire('IPO content updated successfully');
      } else {
        await addIpoContentDetail(body);
        Swal.fire('IPO content added successfully');
        setIpoContent({
          issuecode: "",

          heading_one: "",
          title_1: "",
          description_1: "",
          title_2: "",
          description_2: "",
          title_3: "",
          description_3: "",

          heading_two: "",
          description_two: "",
          parent_company: "",
          founded: "",
          managing_director: "",

          heading_three: "",
          title_11: "",
          description_11: "",
          title_22: "",
          description_22: "",
          title_33: "",
          description_33: "",
          title_111: "",
          description_111: "",
          title_222: "",
          description_222: "",
          title_333: "",
          description_333: "",
        })
      }

    } catch (error) {
      Swal.fire(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    const fetchIpoContentById = async () => {
      try {
        setLoading(true);
        const res = await getIpoContentsById(id);

        const { content_one, content_two, content_three, issuecode } = res.data;

        setIpoContent({
          issuecode: issuecode,

          heading_one: content_one.heading,
          title_1: content_one.content[0].title,
          description_1: content_one.content[0].description,
          title_2: content_one.content[1].title,
          description_2: content_one.content[1].description,
          title_3: content_one.content[2].title,
          description_3: content_one.content[2].description,

          heading_two: content_two.heading,
          description_two: content_two.description,
          parent_company: content_two.parent_company,
          founded: content_two.founded,
          managing_director: content_two.managing_director,

          heading_three: content_three.heading,
          title_11: content_three.strengths.content[0].title,
          description_11: content_three.strengths.content[0].description,
          title_22: content_three.strengths.content[1].title,
          description_22: content_three.strengths.content[1].description,
          title_33: content_three.strengths.content[2].title,
          description_33: content_three.strengths.content[2].description,

          title_111: content_three.potential_risks.content[0].title,
          description_111: content_three.potential_risks.content[0].description,
          title_222: content_three.potential_risks.content[1].title,
          description_222: content_three.potential_risks.content[1].description,
          title_333: content_three.potential_risks.content[2].title,
          description_333: content_three.potential_risks.content[2].description,
        });
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchIpoContentById();
    } else {
      setIpoContent({
        issuecode: "",

        heading_one: "",
        title_1: "",
        description_1: "",
        title_2: "",
        description_2: "",
        title_3: "",
        description_3: "",

        heading_two: "",
        description_two: "",
        parent_company: "",
        founded: "",
        managing_director: "",

        heading_three: "",
        title_11: "",
        description_11: "",
        title_22: "",
        description_22: "",
        title_33: "",
        description_33: "",
        title_111: "",
        description_111: "",
        title_222: "",
        description_222: "",
        title_333: "",
        description_333: "",
      })
    }
  }, [pathname])

  return (
    <div className="addUpdateIpoContent">
      <form onSubmit={addUpdateIpoContent} className="acc_card">
        <div className="row g-2">
          <div className="col-md-12">
            <label htmlFor="issuecode" className="form-label">
              Issue Code
            </label>
            <input
              autoComplete="off"
              value={ipoContent.issuecode}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="issuecode"
              name="issuecode"
            />
          </div>

          <h6 className="pt-3">Content One</h6>
          <hr />

          <div className="col-md-12">
            <label htmlFor="heading_one" className="form-label">
              Heading
            </label>
            <input
              autoComplete="off"
              value={ipoContent.heading_one}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="heading_one"
              name="heading_one"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="title_1" className="form-label">
              Title_1
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_1}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_1"
              name="title_1"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_1" className="form-label">
              Description_1
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_1}
              onChange={handleOnchange}
              className="form-control"
              id="description_1"
              name="description_1"
              rows="3"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="title_2" className="form-label">
              Title_2
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_2}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_2"
              name="title_2"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_2" className="form-label">
              Description_2
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_2}
              onChange={handleOnchange}
              className="form-control"
              id="description_2"
              rows="3"
              name="description_2"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="title_3" className="form-label">
              Title_3
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_3}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_3"
              name="title_3"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_3" className="form-label">
              Description_3
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_3}
              onChange={handleOnchange}
              className="form-control"
              id="description_3"
              rows="3"
              name="description_3"
            ></textarea>
          </div>

          <h6 className="pt-3">Content Two</h6>
          <hr />

          <div className="col-md-12">
            <label htmlFor="heading_two" className="form-label">
              Heading
            </label>
            <input
              autoComplete="off"
              value={ipoContent.heading_two}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="heading_two"
              name="heading_two"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_two" className="form-label">
              Description
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_two}
              onChange={handleOnchange}
              className="form-control"
              id="description_two"
              rows="3"
              name="description_two"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="parent_company" className="form-label">
              Parent Company Name
            </label>
            <input
              autoComplete="off"
              value={ipoContent.parent_company}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="parent_company"
              name="parent_company"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="founded" className="form-label">
              Founded
            </label>
            <input
              autoComplete="off"
              value={ipoContent.founded}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="founded"
              name="founded"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="managing_director" className="form-label">
              Managing Director
            </label>
            <input
              autoComplete="off"
              value={ipoContent.managing_director}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="managing_director"
              name="managing_director"
            />
          </div>

          <h6 className="pt-3">Content Three</h6>
          <hr />

          <div className="col-md-12">
            <label htmlFor="heading_three" className="form-label">
              Heading
            </label>
            <input
              autoComplete="off"
              value={ipoContent.heading_three}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="heading_three"
              name="heading_three"
            />
          </div>

          <h6 className="pt-3">Strengths</h6>

          <div className="col-md-12">
            <label htmlFor="title_11" className="form-label">
              Title_1
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_11}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_11"
              name="title_11"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_11" className="form-label">
              Description_1
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_11}
              onChange={handleOnchange}
              className="form-control"
              id="description_11"
              rows="3"
              name="description_11"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="title_22" className="form-label">
              Title_2
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_22}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_22"
              name="title_22"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_22" className="form-label">
              Description_2
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_22}
              onChange={handleOnchange}
              className="form-control"
              id="description_22"
              rows="3"
              name="description_22"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="title_33" className="form-label">
              Title_3
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_33}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_33"
              name="title_33"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_33" className="form-label">
              Description_3
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_33}
              onChange={handleOnchange}
              className="form-control"
              id="description_33"
              rows="3"
              name="description_33"
            ></textarea>
          </div>

          <h6 className="pt-3">Potential Risks</h6>

          <div className="col-md-12">
            <label htmlFor="title_111" className="form-label">
              Title_1
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_111}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_111"
              name="title_111"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_111" className="form-label">
              Description_1
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_111}
              onChange={handleOnchange}
              className="form-control"
              id="description_111"
              rows="3"
              name="description_111"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="title_222" className="form-label">
              Title_2
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_222}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_222"
              name="title_222"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_222" className="form-label">
              Description_2
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_222}
              onChange={handleOnchange}
              className="form-control"
              id="description_222"
              rows="3"
              name="description_222"
            ></textarea>
          </div>
          <div className="col-md-12">
            <label htmlFor="title_333" className="form-label">
              Title_3
            </label>
            <input
              autoComplete="off"
              value={ipoContent.title_333}
              onChange={handleOnchange}
              type="text"
              className="form-control"
              id="title_333"
              name="title_333"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description_333" className="form-label">
              Description_3
            </label>
            <textarea
              autoComplete="off"
              value={ipoContent.description_333}
              onChange={handleOnchange}
              className="form-control"
              id="description_333"
              rows="3"
              name="description_333"
            ></textarea>
          </div>

          <div className="col-md-12 text-center pt-3">
            <button type="submit" className="btn btn-primary">
              {id ? 'Update Data' : 'Save Data'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUpdateIpoContent;