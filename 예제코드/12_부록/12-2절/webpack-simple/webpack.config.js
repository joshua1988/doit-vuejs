// 1. 파일 경로 및 웹팩 플러그인 기능을 사용하기 위해 로컬에 설치된 라이브러리 로딩
var path = require('path')
var webpack = require('webpack')

module.exports = {
  // 2. 웹팩 빌드를 할 대상 파일이 ./src/main.js
  entry: './src/main.js',
  // 3. 웹팩 빌드를 하고 난 결과물의 위치는 ./dist/build.js
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  // 4. 웹팩으로 빌드를 할 때 각 파일에 적용할 로더 설정(비 자바스크립트 파일을 자바스크립트 파일로 변환하기 위한 변환도구 지정)
  module: {
    rules: [
      {
        // 4-1. 프로젝트 폴더 내의 모든 css 파일에 대해 vue-style-loader와 css-loader를 적용하여 빌드
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        // 4-2. 프로젝트 폴더 내의 모든 vue 파일에 대해 vue-loader를 적용하여 빌드
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        // 4-3. 프로젝트 폴더 내의 모든 js 파일에 대해 babel-loader를 적용하여 빌드
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // 4-4. 프로젝트 폴더 내의 모든 이미지 파일에 대해 file-loader를 적용하여 빌드
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // 5. 웹팩 빌드 옵션에 따라 라이브러리 선택
  // https://vuejsdevelopers.com/2017/06/18/vue-js-boost-your-app-with-webpack/
  // https://kr.vuejs.org/v2/guide/installation.html#각-다른-빌드간-차이점
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  // 6. 웹팩 데브 서버를 아래의 옵션으로 사용
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  // 7. 웹팩으로 빌드한 결과물의 크기 제한이 초과 되었는지 여부 알림
  performance: {
    hints: false
  },
  // 8. 개발자 도구에서의 웹팩 결과물 분석 옵션 설정
  devtool: '#eval-source-map'
}

// 9. 최종 배포시의 최적화 옵션 설정
if (process.env.NODE_ENV === 'production') {
  // 9-1. 개발자 도구의 웹팩 결과물 분석 옵션
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // 9-2. 환경 변수 및 자바스크립트 압축과 사이즈 최소화
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
