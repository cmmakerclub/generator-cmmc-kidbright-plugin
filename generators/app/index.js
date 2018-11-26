'use strict'
const path = require('path')
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const mkdirp = require('mkdirp')

const defaultValidators = {
  notNull: (input) => input ? true : 'Please enter a valid input'
}

module.exports = class extends Generator {
  // note: arguments and options should be defined in the constructor.
  constructor (args, opts) {
    super(args, opts)

    // // This makes `plugin_name` argument.
    this.argument('pluginName', {
      type: String,
      required: false,
      description: 'plugin name'
    })
    // // And you can then access it later; e.g. this.pluginName
  }

  initializing () {
    this.props = {}
    // this.pkg = require('../../package.json')
  }

  default () {
    if (path.basename(this.destinationPath()) !== this.props.pluginName.toLowerCase()) {
      this.log(`Your generator must be inside a folder named ${this.props.pluginName.toLowerCase()}
I'll automatically create this folder.`
      )

      // create-directory
      const targetDir = (this.props.pluginName).toLowerCase()
      mkdirp(`${targetDir}/msg`)
      this.destinationRoot(this.destinationPath(targetDir))
    }
  }

  prompting () {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the best ${chalk.red('generator-cmmc-kidbright-plugin')} generator!`))

    const prompts = [{
      type: 'input',
      name: 'pluginName',
      validate: defaultValidators.notNull,
      message: 'Plug-in name: (recommend to use 3-letter prefix):',
      default: this.options.pluginName || this.pluginName || 'CMCClassName' // Default to current folder name
    }, {
      type: 'list',
      name: 'pluginType',
      message: 'What plugin type do you want to create?',
      choices: [...['DEV_IO', 'DEV_I2C0', 'DEV_I2C1', 'DEV_SPI'], 'None']
    }]

    return this.prompt(prompts).then(answers => {
      this.props = answers
      console.log(answers)
    })
  }

  configuring () {
    console.log('configuring is run.')
  }

  writing () {
    this._writingGit()
    this._writingEditorConfig()
    this._writingConfig()
  }

  _writingConfig () {
    let templateFileName = `NATTemplate`
    const templateOptions = {
      className: this.props.pluginName,
      classNameLowerCase: this.props.pluginName.toLowerCase()
    }

    this.fs.copyTpl(this.templatePath(`${templateFileName}.cpp`),
      this.destinationPath(`${templateOptions.className}.cpp`), templateOptions)

    this.fs.copyTpl(this.templatePath(`${templateFileName}.h`),
      this.destinationPath(`${templateOptions.className}.h`), templateOptions)

    let files = ['blocks.js', 'generators.js', 'msg/en.js', 'msg/th.js']
    files.forEach(item => {
      this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), templateOptions)
    })
  }

  _writingEditorConfig () {
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'))
  }

  _writingGit () {
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(this.templatePath('gitattributes'), this.destinationPath('.gitattributes'))
  }

  end () {
    this.log(`Happy coding!`)
  }
}
