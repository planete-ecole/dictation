import React from 'react';
import { withNamespaces, reactI18nextModule } from 'react-i18next';
import { Button, FormGroup, Input, InputGroup, InputGroupAddon, Card, CardHeader, CardBody, Container, Label, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { withAudio } from 'connector';
import i18n from 'i18next';

var component = function component(_ref) {
  var t = _ref.t;
  return React.createElement(
    'div',
    { className: 'my-3' },
    React.createElement(
      Button,
      { block: true, color: 'primary' },
      t('action.validate')
    )
  );
};

component.propTypes = {
  t: PropTypes.func.isRequired
};

var MarkButton = withNamespaces()(component);

var component$1 = function component(_ref) {
  var _onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      t = _ref.t,
      value = _ref.value;
  return React.createElement(
    FormGroup,
    null,
    React.createElement(
      InputGroup,
      null,
      React.createElement(Input, {
        onChange: function onChange(event) {
          return _onChange(event.target.value);
        },
        placeholder: t('placeholder.question'),
        value: value
      }),
      React.createElement(
        InputGroupAddon,
        { addonType: 'append' },
        React.createElement(
          Button,
          { onClick: onDelete },
          React.createElement('i', { className: 'fas fa-trash' })
        )
      )
    )
  );
};

component$1.propTypes = {
  key: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

var QuestionEditInput = withNamespaces()(component$1);

var component$2 = function component(_ref) {
  var audio = _ref.audio,
      _onChange = _ref.onChange,
      question = _ref.question,
      voice = _ref.voice;
  return React.createElement(
    FormGroup,
    null,
    React.createElement(
      InputGroup,
      null,
      React.createElement(
        InputGroupAddon,
        { addonType: 'prepend' },
        React.createElement(
          Button,
          { color: 'primary', onClick: function onClick() {
              return audio.play(question.answer, voice);
            } },
          React.createElement('i', { className: 'fas fa-volume-up' })
        )
      ),
      React.createElement(Input, { value: question.input, onChange: function onChange(event) {
          return _onChange(event.target.value);
        } })
    )
  );
};

component$2.propTypes = {
  audio: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  voice: PropTypes.string.isRequired
};

var QuestionInput = withAudio(component$2);

var component$3 = function component(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return React.createElement(
    Card,
    { className: 'my-3' },
    React.createElement(
      CardHeader,
      null,
      React.createElement(
        'h6',
        null,
        title
      )
    ),
    React.createElement(
      CardBody,
      null,
      children
    )
  );
};

component$3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired
};

function onValueChange(value, questions, index, onChange) {
  var copy = questions.slice();
  copy[index].input = value;
  onChange('questions', copy);
}

var component$4 = function component(_ref) {
  var _onChange = _ref.onChange,
      questions = _ref.questions,
      voice = _ref.voice;
  return React.createElement(
    React.Fragment,
    null,
    questions.map(function (question, index) {
      return React.createElement(QuestionInput, {
        key: index,
        onChange: function onChange(value) {
          return onValueChange(value, questions, index, _onChange);
        },
        question: question,
        voice: voice
      });
    })
  );
};

component$4.propTypes = {
  onChange: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  voice: PropTypes.string
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var derive = function derive(data) {
  return _extends({}, data, { questions: data.questions.map(function (question) {
      return { input: '', answer: question };
    }) });
};

var StudentComponent = function (_React$Component) {
  inherits(StudentComponent, _React$Component);

  function StudentComponent(props) {
    classCallCheck(this, StudentComponent);

    var _this = possibleConstructorReturn(this, (StudentComponent.__proto__ || Object.getPrototypeOf(StudentComponent)).call(this, props));

    _this.onChange = function (key, value) {
      return _this.setState(defineProperty({}, key, value));
    };

    _this.state = derive(props.data);
    return _this;
  }

  createClass(StudentComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Container,
        { fluid: true },
        React.createElement(
          'h1',
          null,
          this.state.name
        ),
        React.createElement(
          'p',
          null,
          this.state.instruction
        ),
        React.createElement(component$4, { questions: this.state.questions, onChange: this.onChange, voice: this.state.voice }),
        React.createElement(MarkButton, null)
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var normalized = _extends({}, state, { questions: state.questions.map(function (question) {
          return question.answer;
        }) });

      if (JSON.stringify(normalized) !== JSON.stringify(props.data)) {
        return derive(props.data);
      }

      return null;
    }
  }]);
  return StudentComponent;
}(React.Component);

StudentComponent.propTypes = {
  data: PropTypes.object.isRequired
};

var component$5 = function component(_ref) {
  var instruction = _ref.instruction,
      name = _ref.name,
      _onChange = _ref.onChange,
      t = _ref.t;
  return React.createElement(
    component$3,
    { title: t('title.description') },
    React.createElement(
      FormGroup,
      null,
      React.createElement(Input, {
        placeholder: t('field.name'),
        onChange: function onChange(event) {
          return _onChange('name', event.target.value);
        },
        value: name
      })
    ),
    React.createElement(
      FormGroup,
      null,
      React.createElement(Input, {
        name: 'instruction',
        placeholder: t('field.instruction'),
        onChange: function onChange(event) {
          return _onChange('instruction', event.target.value);
        },
        value: instruction
      })
    )
  );
};

component$5.propTypes = {
  instruction: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

var MainInfo = withNamespaces()(component$5);

function onQuestionChange(questions, value, index, onChange) {
  questions[index] = value;
  onChange('questions', questions);
}

function onQuestionRemove(questions, index, onChange) {
  questions.splice(index, 1);
  onChange('questions', questions);
}

var component$6 = function component(_ref) {
  var questions = _ref.questions,
      _onChange = _ref.onChange,
      t = _ref.t;
  return React.createElement(
    component$3,
    { title: t('title.word_list') },
    React.createElement(
      'div',
      null,
      questions.map(function (question, index) {
        return React.createElement(QuestionEditInput, {
          key: index,
          onChange: function onChange(value) {
            return onQuestionChange(questions, value, index, _onChange);
          },
          onDelete: function onDelete() {
            return onQuestionRemove(questions, index, _onChange);
          },
          value: question
        });
      })
    ),
    React.createElement(
      Button,
      { block: true, outline: true, color: 'primary', onClick: function onClick() {
          return _onChange('questions', questions.concat(['']));
        } },
      t('action.add_word')
    )
  );
};

component$6.propTypes = {
  questions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

var QuestionList = withNamespaces()(component$6);

var component$7 = function component(_ref) {
  var t = _ref.t;
  return React.createElement(
    component$3,
    { title: t('title.session') },
    React.createElement(
      'p',
      { className: 'font-italic font-weight-normal' },
      t('message.not_available')
    ),
    React.createElement(
      Button,
      { block: true, outline: true, color: 'primary', disabled: true },
      t('action.program_session')
    )
  );
};

component$7.propTypes = {
  t: PropTypes.func.isRequired
};

var Session = withNamespaces()(component$7);

var component$8 = function component(_ref) {
  var length = _ref.length,
      _onChange = _ref.onChange,
      random = _ref.random,
      t = _ref.t;
  return React.createElement(
    component$3,
    { title: t('title.settings') },
    React.createElement(
      FormGroup,
      null,
      React.createElement(
        FormGroup,
        { check: true },
        React.createElement(
          Label,
          { check: true },
          React.createElement(Input, { type: 'checkbox', onChange: function onChange() {
              return _onChange('random', !random);
            }, checked: random }),
          t('field.random')
        )
      )
    ),
    React.createElement(
      FormGroup,
      null,
      React.createElement(Input, { type: 'number', placeholder: t('field.length'), value: length, onChange: _onChange, disabled: true })
    )
  );
};

component$8.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  random: PropTypes.bool,
  t: PropTypes.func.isRequired
};

var Settings = withNamespaces()(component$8);

var component$9 = function component(_ref) {
  var onSubmit = _ref.onSubmit,
      t = _ref.t;
  return React.createElement(
    'div',
    { className: 'my-3' },
    React.createElement(
      Button,
      { block: true, color: 'primary', onClick: onSubmit },
      t('action.save')
    )
  );
};

component$9.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

var Submit = withNamespaces()(component$9);

var component$a = function component(_ref) {
  var _onChange = _ref.onChange,
      t = _ref.t,
      value = _ref.value;
  return React.createElement(
    component$3,
    { title: t('title.state') },
    React.createElement(
      FormGroup,
      { check: true },
      React.createElement(
        Label,
        { check: true },
        React.createElement(Input, { type: 'radio', checked: value === 'limited', onChange: function onChange() {
            return _onChange('visibility', 'limited');
          } }),
        t('field.visibility.limited')
      )
    ),
    React.createElement(
      FormGroup,
      { check: true },
      React.createElement(
        Label,
        { check: true },
        React.createElement(Input, { type: 'radio', checked: value === 'available', onChange: function onChange() {
            return _onChange('visibility', 'available');
          } }),
        t('field.visibility.available')
      )
    )
  );
};

component$a.propTypes = {
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.oneOf(['available', 'limited']).isRequired
};

var Visibility = withNamespaces()(component$a);

var defaultState = {
  name: '',
  instruction: '',
  questions: [''],
  random: false,
  length: 0,
  visibility: 'available',
  voice: 'fr-FR-Wavenet-D'
};

var TeacherComponent = function (_React$Component) {
  inherits(TeacherComponent, _React$Component);

  function TeacherComponent(props) {
    classCallCheck(this, TeacherComponent);

    var _this = possibleConstructorReturn(this, (TeacherComponent.__proto__ || Object.getPrototypeOf(TeacherComponent)).call(this, props));

    _this.onChange = function (property, value) {
      return _this.setState(defineProperty({}, property, value));
    };

    _this.state = _extends({}, defaultState, props.data);
    return _this;
  }

  createClass(TeacherComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { className: 'col-lg-8' },
            React.createElement(MainInfo, { instruction: this.state.instruction, name: this.state.name, onChange: this.onChange }),
            React.createElement(QuestionList, { questions: this.state.questions, onChange: this.onChange })
          ),
          React.createElement(
            Col,
            { className: 'col-lg-4' },
            React.createElement(Settings, { random: this.state.random, onChange: this.onChange }),
            React.createElement(Visibility, { value: this.state.visibility, onChange: this.onChange }),
            React.createElement(Session, null),
            React.createElement(Submit, { onSubmit: function onSubmit() {
                return _this2.props.onSubmit(_this2.state);
              } })
          )
        )
      );
    }
  }]);
  return TeacherComponent;
}(React.Component);

TeacherComponent.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

var action = {
	add_word: "add a word",
	back_to_list: "back to the exercise list",
	program_session: "program a session",
	save: "save",
	validate: "validate my answers"
};
var field = {
	instruction: "instruction",
	length: "length",
	name: "exercise name",
	random: "random order",
	visibility: {
		available: "available",
		limited: "hidden"
	}
};
var message = {
	not_available: "this feature is not available yet",
	mark: {
		success_first_attempt: "Well done, you found everything on your first attempt !",
		success_correction_done: "Alright, you corrected all mistakes !",
		error: "You have {{correct}} answers correct out of {{total}}"
	}
};
var placeholder = {
	question: "Enter a question"
};
var title = {
	description: "exercise description",
	word_list: "word list",
	settings: "settings",
	state: "state",
	session: "session"
};
var en = {
	action: action,
	field: field,
	message: message,
	placeholder: placeholder,
	title: title
};

var action$1 = {
	add_word: "ajouter un mot",
	back_to_list: "retour à la liste",
	program_session: "programmer une session",
	save: "enregistrer",
	validate: "valider mes réponses"
};
var field$1 = {
	instruction: "consigne",
	length: "durée",
	name: "nom de l'exercice",
	random: "ordre aléatoire",
	visibility: {
		available: "visible",
		limited: "caché"
	}
};
var message$1 = {
	not_available: "cette fonctionnalité n'est pas encore disponible",
	mark: {
		success_first_attempt: "Bravo, tu as réussi l'exercice du premier coup !",
		success_correction_done: "C'est bien, tu as tout corrigé.",
		error: "Tu as {{correct}} bonne(s) réponse(s)  sur {{total}}."
	}
};
var placeholder$1 = {
	question: "Saisissez une question"
};
var title$1 = {
	description: "Informations générales",
	word_list: "Liste de mots",
	settings: "Paramètres",
	state: "Etat",
	session: "Session"
};
var fr = {
	action: action$1,
	field: field$1,
	message: message$1,
	placeholder: placeholder$1,
	title: title$1
};

i18n.use(reactI18nextModule) // passes i18n down to react-i18next
.init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: 'fr',
  fallbackLng: 'fr',

  interpolation: {
    escapeValue: false
  }
});

var name = 'dictation';

var index = { name: name, student: StudentComponent, teacher: TeacherComponent };

export default index;
//# sourceMappingURL=index.es.js.map
