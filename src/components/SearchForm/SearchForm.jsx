import React from "react";
import { navigate } from "gatsby";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import moduleList from "../../generated/module-result.json";

function SearchForm({ query, filter, prefix }) {
  const tagList = new Set();
  moduleList.forEach((module) => {
    module.tags.forEach((tag) => {
      tagList.add(tag);
    });
  });
  return (
    <Form role="search" method="GET">
      <Row form className="justify-content-center" d="search-form">
        <Col md="2">
          <FormGroup>
            <Label for="searchFilter">
              <h6>Filter</h6>
            </Label>
            <Input
              type="select"
              name="filter"
              bsSize="lg"
              className="search-filter"
              aria-controls="search-results-count"
              onChange={(e) =>
                navigate(
                  `${prefix}?keywords=${query}&filter=${encodeURIComponent(
                    e.target.value
                  )}`
                )
              }
              value={filter}
            >
              <option value="">All</option>
              {[...tagList.values()].map((tag) => (
                <option value={tag}>{tag}</option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="8">
          <FormGroup>
            <Label for="searchQuery">
              <h6>Search</h6>
            </Label>
            <Input
              type="search"
              className="search-input"
              name="keywords"
              bsSize="lg"
              aria-controls="search-results-count"
              onChange={(e) =>
                navigate(
                  `${prefix}?keywords=${encodeURIComponent(
                    e.target.value
                  )}&filter=${filter}`
                )
              }
              placeholder="Search..."
              value={query}
            />
          </FormGroup>
        </Col>
        <Col md="2">
          <Button
            type="submit"
            color="primary"
            size="lg"
            className="search-btn"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;
