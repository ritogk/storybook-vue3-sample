/**
 * Storybook 全体での parameters のデフォルト値を定義する
 */
export const parameters = {
  // Viewport addon で使用される設定
  viewport: {
    // プリセットをアプリケーションの仕様に合わせて定義
    viewports: {
      pc: {
        name: 'Min PC Layout',
        styles: {
          width: '992px',
          height: '100%'
        }
      },
      mobile: {
        name: 'Min Mobile Layout',
        styles: {
          width: '375px',
          height: '100%'
        }
      }
    },
    // すべてのストーリーでデフォルト PC ビューを使用する
    defaultViewport: 'pc'
  }
}
