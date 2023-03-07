class CommonPageObject {
  private static commonPageObject: CommonPageObject;

  static getInstance(): CommonPageObject {
    if (!CommonPageObject.commonPageObject) {
      CommonPageObject.commonPageObject = new CommonPageObject();
    }

    return CommonPageObject.commonPageObject;
  }
}

export default CommonPageObject;
