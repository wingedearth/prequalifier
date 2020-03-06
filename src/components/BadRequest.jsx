import React from 'react';
import { bool } from 'prop-types';
import './BadRequest';

const BadRequest = ({ badreq }) => <p className="bad-request">{badreq ? 'Bad Request' : ''}</p>;

BadRequest.propTypes = { badreq: bool };

export default BadRequest;
