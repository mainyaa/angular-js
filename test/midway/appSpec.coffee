describe "Spec: Testing Modules", ->

  describe "PubNubAngularApp Module:", ->
    module = null
    before ->
      module = angular.module("PubNubAngularApp")
    it "should be registered", ->
      expect(module).not.to.equal(null)

    deps = null
    describe "Dependencies:", ->
      hasModule = (m) ->
        return deps.indexOf(m) >= 0
      before ->
        deps = module.value('appName').requires
      it "should have pubnub.angular.service as a dependency", ->
        expect(hasModule('pubnub.angular.service')).to.equal(true)

