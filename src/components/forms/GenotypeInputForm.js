import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import GeneFetcher from '../fetchers/GeneFetcher'
import VariantCollection from '../control/VariantCollection'

import { Card, Jumbotron, Form, Col, Row, Button  } from 'react-bootstrap';

const autoBind = require('auto-bind');

class GenotypeInput extends Component {
    constructor(props) {
        super(props)
        if( typeof props.genotypes === 'undefined' ) {
            this.state = {
                genotypes: [],
                callbackNext: props.moveNext,   callbackPrev: props.movePrev
            }
        } else {
            this.state = {
                genotypes: props.genotypes.genotypes,
                callbackNext: props.moveNext,   callbackPrev: props.movePrev
            }
        }
        this.child_gene = React.createRef();
        this.child_coll = React.createRef();
        autoBind(this)
    }

    triggerPrev = () => {
        this.state.callbackPrev({
            formName: 'genotypes',   step: 3
        })
    }

    triggerNext = () => {
        this.state.callbackNext({
            formName: 'genotypes',   step: 5,
            data: { variants: this.state.variants }
        })
    }

    render = () => {
        var next = ''
        return(
            <Card>
                <Card.Header><h2>Genotypes</h2></Card.Header>
                <Card.Body>
                    <Jumbotron>
                        <p>Soem scientific articles do report more than just observed variants but also observed genotypes.</p>
                        <p>If a scientific article does not report information on genotypes, please, select the checkbox under this information tip.</p>
                        <p>This step of the <em>treatabolome entry tool</em> allows to use the previously introduced variants to define genotypes using the boolean operations <code>OR</code> and <code>AND</code>.</p>
                        <p>Start selecting one of the variants and then go on by selecting the remaining variants oberved together.</p>    
                    </Jumbotron>
                    <div className="float-sm-right">
                        <Button onClick={ this.triggerPrev }><FontAwesomeIcon icon={faChevronLeft} /> Previous</Button>{' '}
                        { next }
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default GenotypeInput