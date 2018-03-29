//
//  MainViewController.m
//  BundleHack
//
//  Created by Hays on 27/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import "RNFuncViewController.h"

@interface RCTBridge()

@property(atomic, strong) RCTBridge *batchedBridge;

- (void)enqueueApplicationScript:(NSData *)script
                             url:(NSURL *)url
                      onComplete:(dispatch_block_t)onComplete;

@end

@interface MainViewController ()<UITableViewDelegate, UITableViewDataSource, RCTBridgeDelegate>

@property(nonatomic, strong) RCTBridge *bridge;

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  self.bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
  UITableView *tableView = [[UITableView alloc]initWithFrame:self.view.bounds];
  tableView.dataSource = self;
  tableView.delegate = self;
  
  [tableView registerClass:[UITableViewCell class] forCellReuseIdentifier:@"cell"];
  [self.view addSubview: tableView];
}

#pragma mark - private

//-(void)runModule:(NSString *)moduleName
//{    NSDictionary *appParameters = @{
//        @"rootTag": @1,
//        @"initialProps": @{},
//      };
//
//  [_bridge enqueueJSCall:@"AppRegistry.runApplication"
//                    args:@[moduleName, appParameters]];
//}

#pragma mark - RCTBridgeDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  NSString *app1Path = [[NSBundle mainBundle] pathForResource:@"common" ofType:@"jsbundle"];
  return [NSURL URLWithString:app1Path];
}

#pragma mark - UITableViewDelegate & UITableViewDataSource

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
  return 2;
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
  return 100;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
  UITableViewCell *tableViewCell = [tableView dequeueReusableCellWithIdentifier:@"cell" forIndexPath:indexPath];
  switch (indexPath.row) {
    case 0:
    {
      tableViewCell.textLabel.text = @"Async Load App";
    }
      break;
    case 1:
    {
      tableViewCell.textLabel.text = @"Async Load App2";
    }
      break;
    default:
      break;
  }
  return tableViewCell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
  switch (indexPath.row) {
    case 0:
    {
      NSString *app2Path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"jsbundle"];
      NSData *app2JSCode = [NSData dataWithContentsOfFile:app2Path];
      NSLog(@"read js data : %@", @(app2JSCode.length));
      [self.bridge.batchedBridge enqueueApplicationScript:app2JSCode url:[NSURL URLWithString:app2Path] onComplete:^{
        dispatch_async(dispatch_get_main_queue(), ^{
          RNFuncViewController *vc = [[RNFuncViewController alloc] initWithModuleName:@"BundleHack" bridge:self.bridge];
          [self.navigationController pushViewController:vc animated:YES];
        });
      }];
    }
      break;
    case 1:
    {
      NSString *app2Path = [[NSBundle mainBundle] pathForResource:@"index2" ofType:@"jsbundle"];
      NSData *app2JSCode = [NSData dataWithContentsOfFile:app2Path];
      NSLog(@"read js data : %@", @(app2JSCode.length));
      [self.bridge.batchedBridge enqueueApplicationScript:app2JSCode url:[NSURL URLWithString:app2Path] onComplete:^{
        dispatch_async(dispatch_get_main_queue(), ^{
          RNFuncViewController *vc = [[RNFuncViewController alloc] initWithModuleName:@"BundleHack2" bridge:self.bridge];
          [self.navigationController pushViewController:vc animated:YES];
        });
      }];
    }
      break;
    default:
      break;
  }
  
}

@end
