CateCol = new orion.collection('categories', {
  singularName: 'category', // The name of one of these items
  pluralName: 'categories', // The name of more than one of these items
  title: 'categories', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'categories'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "label", title: "Label" },
      { data: "value", title: "Value"},
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('image', 'image', orion.helpers.getTranslation('CateCol.schema.image')),
      orion.attributeColumn('summernote', 'description', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

CateCol.attachSchema(new SimpleSchema({
  label: {label: 'Title for categories',type: String},
  value:{label:'categories index or readable id', type: String},
  /**
   * The file attribute is a custom orion attribute
   * This is where orion does its magic. Just set
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('image', {label: 'Image',
      optional: true
  }),



  /**
   * Here it's the same with an image attribute.
   * summernote is an html editor.
   */
  body: orion.attribute('summernote', {label: 'description'}),
  /**
   * This attribute sets the user id to that of the user that created
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy')
}));
